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
        <div id="main">
        	<header>
        		<div class="container">
        		<div class="row">
				<div class="col-md-6">
					<h1>Tu deuda mundial</h1>
				</div>
				<div class="col-md-6">
					<h2>$2,937<span>USD</span> <small>($37,950.45 MXN deuda externa por mexicano al 2012)</small>  </h2>
				</div>
        		</div>
        		</div>
			</header>
			<div class="container">
			<div class="row">
			<div class="col-md-12">
					
				
				<p>
					<a href="#ciudadano" class="citizens">Ciudadanos</a>
				 <a href="#deudaperperson" class="deudaperperson">Historial deuda por Persona</a>
				 <a href="#ciudadano" class="graphs current">Historial de Deuda por País</a>
				 <a href="#pib" class="pib">Historial de PIB por País</a></p>
				</div>
			</div>
			<article class="row">
			
        	<div class="row-md-12">
        		<div id="ciudadano">
	        		<h2>Deuda mundial por ciudadano</h2>
	        		<p>Comparación entre deuda en USD contra el total de la población por país al 2012.</p>
	        		<div id="ciudadano_graph"></div>
        		</div>
        		<div id="deudaperperson">
	        		<h2>Historial de deuda mundial por ciudadano</h2>
	        		<p>Comparación de 1972 a 2012 entre México, Turquía e Indonesia.</p>
	        		<div id="deudaperperson_graph"></div>
        		</div>
        		<div id="pib">
	        		<h2>Historial del PIB por País</h2>
	        		<p>Comparación de 1972 a 2012 entre México, Turquía e Indonesia.</p>
	        		<div id="pib_graph"></div>
        		</div>
				<div id="viz">
					<h2>Historial de deuda externa por País</h2>
	        		<p>Comparación de 1972 a 2012 entre México, Turquía e Indonesia.</p>
	        		<div id="viz_graph"></div>
				</div>
        	</div>
        </article>
        	        		</div>

     
        </div>
           <footer class="row">
        	<div class="col-md-12">
        		<p><a href="/about.php">Acerca del sitio</a></p>
        	</div>
        </footer>
        
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
