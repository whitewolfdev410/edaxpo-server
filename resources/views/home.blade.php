<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('header')
</head>

<body class="antialiased">
    <div class="col-12 qui">
        <div class="col-12 d-flex flex-column wrapper" style="height:100vh">
            @include('navbar')
            @include('search')
        </div>
    </div>
    <script>
    </script>
</body>
</html>
