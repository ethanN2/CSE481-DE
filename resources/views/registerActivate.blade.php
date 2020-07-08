<!DOCTYPE html>
<html>
<head>
    <title>cuc cu cuc cu</title>
</head>
<body>
    <h1>Thanks for signup! Please before you begin, you must confirm your account.</h1>
    <p>click link below</p>
    <a href="{{ url('/api/auth/register/activate/' . $user->activation_token) }}">get activation link</a>

    <p>Thank you</p>
</body>
</html>