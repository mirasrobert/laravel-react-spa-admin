<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response([
                'message' => 'Login Success',
                'data' => $request->user(),
                'success' => false
            ]);
        }

        return response(['message' => 'The provided credentials do not match our records.', 'success' => false], 422);
    }

    /**
    * Log the user out of the application.
    */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response(['message' => 'Logout successfully']);
    }
}
