<?php

namespace App\Http\Controllers;

use App\User;
use App\Notifications\RegisterActivate;
use App\Mail\mailForm;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Mail;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:150',
            'password' => 'required|string|max:200',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['email', 'password']);
        $credentials['active'] = 1;
        $credentials['deleted_at'] = null;

        if (!Auth::attempt($credentials))
            return response()->json([
                'status' => 'fail',
                'message' => 'Unauthorized'
            ], 401);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'role' => 'required|string|max:16',
            'email' => 'required|string|email|unique:users|max:150',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'role' => $request->role,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'activation_token' => Str::random(60)
        ]);

        $url = url('/api/auth/register/activate/' . $user->activation_token);
        // $user->notify(new RegisterActivate($user));
        // Mail::send(new mailForm($user));
        $user->save();

        return response()->json(array([
            'url_activate' => $url,
            'status' => 'success',
            'message' => 'created user successfully <3'
        ]));
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out!!'
        ]);
    }
    public function registerActivate($token)
    {
        $user = User::where('activation_token', $token)->first();
        if (!$user) {
            return response()->json([
                'status' => 'fail',
                'message' => 'This activation token is invalid.'
            ], 404);
        }
        $user->active = true;
        $user->activation_token = '';
        $user->save();
        return $user;
    }
    public function getUsers(Request $request)
    {
        $request->validate([
            'per_page' => 'required|number|max:25',
        ]);

        switch ($request->get('per_page')) {
            case 10:
                $users = User::paginate(10);
                break;
            case 15:
                $users = User::paginate(15);
                break;
            case 20:
                $users = User::paginate(20);
                break;
            case 25:
                $users = User::paginate(25);
                break;
            default:
                return response()->json([
                    'message' => 'per_page values (10,15,20,25)'
                ], 400);
                break;
        }

        return response()->json([
            'data' => $users,
            'message' => 'get users successfully!!'
        ],200);
    }
    public function update(Request $request, $user_id)
    {
        $request->validate([
            'first_name' => 'string|max:50',
            'last_name' => 'string|max:50',
            'role' => 'string|max:16'
        ]);
        
        $user = user::findorfail($user_id);
        $user->first_name = $request->get('fisrt_name');
        $user->last_name = $request->get('last_name');
        $user->role = $request->get('role');

        $user->save();

        return response()->json([
            'message' => 'updated successfully!!'
        ]);
    }
    public function destroy($user_id)
    {
        $user = User::findorfail($user_id);
        $user->delete();
        return response()->json([
            'message' => 'deleted user successfully!!'
        ]);
    }
}
