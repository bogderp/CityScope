<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Bogdan Pozderca">
    <link rel="shortcut icon" href="imgFiles/favicon.ico" type="image/x-icon">
    <link rel="icon" href="imgFiles/favicon.ico" type="image/x-icon">

    <title>CityScope</title>

    <!-- Bootstrap core CSS -->
    <link href="webFiles/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="webFiles/css/index.css">
    <link href="webFiles/css/nv.d3.css" rel="stylesheet" type="text/css">
  </head>
  <body>    
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.php" style="color: black"><strong>CityScope</strong></a>
        </div>     
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="index.php" style="color: black">Home</a></li>
              <li id="countyDropdown" class="dropdown" style="display: none">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" style="color:white">Counties<span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu" style="background-color: white">
                </ul>
              </li>   
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <h3 id='selectedCity'>Michigan</h3>

    <div id='content'>
      <h4 id='mapTitle' style="color: white; display: none;">Click on a state, then choose a county from the menu.</h4>
      <div id="map" style="width: 600px; height: 430px;"></div>
      
      <div id='mod5_head'>
      <h3 id='tagline' style="color: black">A visual snapshot of any city in seconds.</h3>
      <h4 id='mapTitle2' style="position: absolute; color: white; left: 20.5%; top: 100%;">Click on a state, then choose a county from the menu.</h4>
      </div>

      <div id='mod1_chart'>
        <h4 id='mod1h' style="color: black; padding-top: 16px;">Diversity</h4>
        <svg></svg>
      </div>

      <div id='mod2_chart'>
        <h4 style="color: black; padding-top: 8px;">Poverty Trend</h4>
        <svg></svg>
        <strong><h9 style="color: black; position: absolute; left: 90%; bottom: 14.3%; font-size: 9pt">13</h9></strong>
      </div>

      <div id='mod3_chart'>
        <h4 style="color: black; padding-top: 8px;">Farmers Market Density</h4>
        <div><canvas id="myChart"></canvas></div>
      </div>

      <div id='mod4_chart'>
          <div id="carousel-example-generic" style='height: 100%' class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
           
            <!-- Wrapper for slides -->
            <div class="carousel-inner" style='text-align: center'>
              <div class="item active">
                <img id="first" src="imgFiles/Alaska.jpg">
              </div>
              <div class="item">
                <img id="sec" src="">
              </div>
              <div class="item">
                <img id="thrd" src="">
              </div>
            </div>
           
            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div> <!-- Carousel -->
          <h4 style="color: black; position: absolute; bottom: 3px; left: 40%;">Google Places feed</h4>
      </div>



    </div> 



    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="webFiles/dist/js/bootstrap.min.js"></script>
    <script src="webFiles/js/d3.v3.js"></script>
    <script src="webFiles/js/raphael.js"></script>
    <script src="webFiles/js/jquery.usmap.js"></script>
    <script src="webFiles/js/Chart.js"></script>
    <script src="webFiles/js/nv.d3.js"></script>
    <script src="webFiles/js/index.js" type="text/javascript"></script>
  </body>
</html>