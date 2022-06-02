<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\StatefulGuard as StatefulGuardContract;
use Inertia\Inertia;

class StaffMember
{
    protected $auth;

    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    public function handle(Request $request, Closure $next)
    {
        $user = $this->auth->user();

        if (!$user || !$user->isStaffMember()) {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'Not Authorized to view content.'
                ], 403);
            }
            return redirect()->back();
        }

        return $next($request);
    }
}
