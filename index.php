<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Tu deuda mundial</title>
        <meta name="description" content="Describe cuánto debes al mundo como mexicano.">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/main.css">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,600,300' rel='stylesheet' type='text/css'>
        <!-- load D3plus CSS -->
		<link href="css/d3plus.css" rel="stylesheet" />
		<!-- create container element for visualization -->
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div id="main" class="container">
        	<header class="row">
				<div class="col-md-6">
					<h1>Tu deuda mundial</h1>
				</div>
				<div class="col-md-6">
					<h2>$2,937<span>USD</span> <small>($37,950.45 MXN deuda por cada mexicano al 2012)</small>  </h2>
				</div>
				
			</header>
			<div class="row">
			<div class="col-md-12">
				<!-- create container element for visualization -->
					
				
				<p>
					<a href="#ciudadano" class="citizens">Ciudadanos</a>
				 <a href="#pib" class="pib">Historial de PIB</a>
				 <a href="#ciudadano" class="graphs current">Historial de Deuda</a></p>
				</div>
			</div>
			<article class="row">
			
        	<div class="row-md-12">
        		<div id="ciudadano"></div>
        		<div id="pib"></div>
				<div id="viz"></div>
        	</div>
        </article>
        <footer class="row">
        	<div class="col-md-12">
        		<p><a href="/about.php">Acerca del sitio</a></p>
        	</div>
        </footer>
        </div>
        
        
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <!-- load D3js -->
		<script src="js/vendor/d3.js"></script>
 
		<!-- load D3plus after D3js -->
		<script src="js/vendor/d3plus.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

		
		
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>
