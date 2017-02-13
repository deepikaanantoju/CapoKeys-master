<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Index.aspx.vb" Inherits="WebApplication1.Index" %>


<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> 
<html lang="en" ng-app="myApp" class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Capo Keys App</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="html5-boilerplate/dist/css/normalize.css" rel="stylesheet" />
  <link href="html5-boilerplate/dist/css/main.css" rel="stylesheet" />
  <script src="html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js"></script>
  <link href="angular/bootstrap.min.css" rel="stylesheet">


  <link href="external/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href="external/css/grayscale.css" rel="stylesheet" />
  <link rel="stylesheet" href="app.css">                                

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

<!-- Navigation -->
<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
        Menu <i class="fa fa-bars"></i>
      </button>
      <a class="navbar-brand page-scroll" href="#page-top">
        <i class="fa fa-play-circle"></i> <span class="light">Capo Keys</span>
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
      <ul class="nav navbar-nav">
        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
        <li class="hidden">
          <a href="#page-top"></a>
        </li>
        <li>
          <a class="page-scroll" href="#about">Convert</a>
        </li>
        <li>
          <a class="page-scroll" href="#contat">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Intro Header -->
<header class="intro">
  <div class="intro-body">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1 class="brand-heading">Capo Keys</h1>
          <p class="intro-text">An Angular application to translate the keys of chord charts</p>
          <p>Given a series of chords (text string) and a capo value (integer) translate the chords to the correct key.
            Example: The chord series "G Am C D" with a capo value of 2 would be "A Bm D E"</p>
          <a href="#about" class="btn btn-circle page-scroll">
            <i class="fa fa-angle-double-down animated"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- About Section -->
<div id="about" class="container content-section">
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2">

      <div ng-view></div>

    </div>
  </div>
</div>

<!-- Footer -->
<footer>
  <div id="contat" class="footer container text-center">
    <p>Deepika Anantoju</p>
    <p>xxx-xxx-xxxx</p>

    <hr>

    <p>Copyright &copy; Deepika 2017</p>
  </div>
</footer>

<!-- jQuery -->
<script src="angular/jquery-3.1.1.min.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="angular/bootstrap.min.js"></script>

<!-- Plugin JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

<!-- Google Maps API Key - Use your own API key to enable the map feature. More information on the Google Maps API can be found at https://developers.google.com/maps/ -->
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>

<!-- Theme JavaScript -->
    <script src="external/grayscale.js"></script>
   In production use:
<!--  <script src="//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js"></script> -->
    <script src="angular/angular.js"></script>
  <script src="angular/angular-route.min.js"></script>
  <script src="app.js"></script>
  <script src="controllers/search.js"></script>
  <script src="controllers/result.js"></script>
  <script src="service/queryholder.js"></script>

  <script src="components/version/version.js"></script>
  <script src="components/version/version-directive.js"></script>
  <script src="components/version/interpolate-filter.js"></script>
</body>
</html>
