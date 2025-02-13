#!/bin/bash

# Inspired on https://github.com/adriancooney/Taskfile

Black='\033[0;30m'        # Black
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple
Cyan='\033[0;36m'         # Cyan
White='\033[0;37m'        # White

function help {
    echo "$0 <task> <args>"
    echo "Tasks:"
    echo "1. up -> Restart & Update to latest version (start if its stopped)"
    echo "2. down -> Stop the containers"
    echo "3. logs -> view docker compose logs"
    echo "4. artisan -> run artisan command. Eg: auth:password:reset"
    echo "5. optimize -> Clear cache and optimize (run this if you change .env)"
    echo "6. buildfrontend -> Rebuild frontend assets using npm"
    echo "Eg: ./docker-run.sh up"
    echo "Eg: ./docker-run.sh artisan auth:password:reset superadmin"
}

function default {
    help
}

function server() {
    generate_or_check_key
    migrate
    optimize_local
    storagelink
    fixpermissions
    /usr/bin/supervisord
}

function fixpermissions() {
    chmod -R 775 storage/* bootstrap/cache
    chown -R forge:forge .
}

function optimize_local() {
    php artisan clear
    php artisan cache:clear
    php artisan config:clear
    php artisan route:clear
    php artisan view:clear
    php artisan optimize:clear
    php artisan optimize
}

function migrate() {
    echo "Waiting for database to be ready..."
    ATTEMPTS_LEFT_TO_REACH_DATABASE=10
    until [ $ATTEMPTS_LEFT_TO_REACH_DATABASE -eq 0 ] || DATABASE_ERROR=$(php artisan db:monitor 2>&1); do
        sleep 1
        ATTEMPTS_LEFT_TO_REACH_DATABASE=$((ATTEMPTS_LEFT_TO_REACH_DATABASE - 1))
        echo "Still waiting for database to be ready... $ATTEMPTS_LEFT_TO_REACH_DATABASE attempts left."
    done

    if [ $ATTEMPTS_LEFT_TO_REACH_DATABASE -eq 0 ]; then
        echo "Failed to connect to the database:"
        echo "$DATABASE_ERROR"
        exit 1
    else
        echo "The database is ready and reachable"
    fi

    echo "Waiting for redis to be ready..."

    REDIS_MESSAGE=$(redis-cli -h redis ping)

    if [ "$REDIS_MESSAGE" = "PONG" ]; then
        echo "Successfully connected to redis"
    else
        echo "Failed to connect to redis"
        exit 1
    fi
    php artisan migrate --seed --force
}

function keygen() {
    php artisan key:generate --force
}

function generate_or_check_key() {
    local app_key=$(grep '^APP_KEY=' .env | cut -d'=' -f2)
    app_key=$(echo "$app_key" | tr -d '[:space:]')
    if [[ -n $app_key ]]; then
        echo "Key already exists. Skipping key generation..."
    else
        keygen
    fi
}

function storagelink() {
    php artisan storage:link
}

function up() {
    # Try taking pull, if dont work then prompt for stash
    if git pull origin main; then
        echo "${Green}Git pull successful! Continuing update..."
    else
        echo "${Yellow}Warning! You have local changes which will get lost. Type Y to continue, N to cancel update."
        read continueUpdate

        if [ $continueUpdate != 'Y' ]; then
            echo "${Red}Update cancelled!"
            exit 1
        fi

        git stash
        git pull origin main
    fi

    # Stop container
    docker compose down
    # Build the containers
    docker compose build
    docker compose up -d

    echo "Success! Your application is now up-to-date."
}

function down() {
    docker compose down
}

function logs() {
    docker compose logs -f
}

function artisan() {
    docker compose exec -uforge minetrax php artisan "${@}"
}

function optimize() {
    docker compose down
    docker compose up -d
    docker compose exec -uforge minetrax ./docker-run.sh optimize_local
}

function buildfrontend() {
    docker compose exec -uforge minetrax npm i
    docker compose exec -uforge minetrax npm run prod
}

TIMEFORMAT="Task completed in %3lR"
time "${@:-default}"
