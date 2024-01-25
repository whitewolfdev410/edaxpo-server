<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Login</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="assets/css/style.css">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link href="/assets/css/jquery-ui.min.css" rel="stylesheet" />
        <script src="/assets/js/jquery-3.7.1.min.js"></script>
        <script src="/assets/js/jquery-ui.min.js"></script>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <!-- Styles -->
        <style>
            body {
                background: black;
                background-image: url('assets/img/loading-banner.jpg');
            }
            .desc p {
                width: 500px;
                text-align: center;
                font-size: 20px;                
            }
            #home-loading {
                display:none;
            }
        </style>
    </head>
    <body class="antialiased">
        <div style="height: 100vh;" class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white d-flex flex-column align-items-center justify-content-center">
            <div id="home-loading">
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-center">
                        <svg width="90" height="90">       
                            <image xlink:href="/assets/img/loader.svg" fill-opacity="0"  width="90" height="90"/>    
                        </svg>
                    </div>
                    <div class="d-flex justify-content-center">
                        <svg width="90" height="90" stroke="transparent">       
                            <image xlink:href="/assets/img/scritta.svg" style="backgroud:trasparent"  width="90" height="90"/>    
                        </svg>                        
                    </div>
                    <div class="d-flex justify-content-center text-white desc">
                        <p>
                        <b>Edaxpo </b> è il tuo nuovo punto di riferimento nel mondo dei motori per <b>vendere e comprare</b> online.

                        </p>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $(document).ready(function() {
                $("#home-loading").show(800)
                setTimeout(function(){
                    window.location.href="home"
                }, 1000);
            })
        </script>
    </body>
</html>
