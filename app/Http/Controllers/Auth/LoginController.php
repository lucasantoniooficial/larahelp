<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        if(Auth::attempt($request->only('email', 'password'))) {
            $token = Auth::user()->createToken(auth()->user()->name)->plainTextToken;

            return response()->json([
                'status' => 'Success',
                'message' => 'Logado com sucesso!',
                'user' => Auth::user(),
                'token' => $token,
                'type' => 'Bearer'
            ], 200);
        }

        return response()->json([
            'status' => 'Error',
            'message' => 'Credências não foram autenticada!'
        ],401);
    }
}
