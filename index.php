<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <!--INTRO-->
        <div class="slides  green col-md-12">

        </div>
        <!--L'avant (représente l'ancien service)-->
        <div class="slides blue col-md-12">
        </div>
        <!--Décollage fusée de l'écran-->
        <div class="slides  green col-md-12">
            <?php include_once 'img/decollage.php'?>
        </div>
        <!--Fusée dans l'espace-->
        <div class="slides bordeaux col-md-12">
        </div>
        <!--arrivée base spatiale-->
        <div class="slides  col-md-12">
        </div>
        <!--Fusée quitte base-->
        <div class="slides  col-md-12">
        </div>
        <!--3fusées-->
        <div class="slides  col-md-12">
        </div>

    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>

<script src="js/main.js"></script>
<script src="js/intro.js"></script>
<script src="js/decollagefusee.js"></script>

</body>
</html>