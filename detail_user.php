<?php
    include('header.php');
?>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detail users</title>
  <link rel="stylesheet" href="css/listquestion.css">
  <link rel="stylesheet" href="assets/icofont/icofont.min.css">
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="./vendors/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-
  hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/header.css">
</head>

<div class="container-fluid">
    <h2 style="margin: 0 0 0 25%">CHI TIẾT USER</h2>
<div class="row">
    <div class="col-md-3">
        <button type="button" style="width: 100%" class="btn btn-outline-secondary">Thông tin</button>
    </div>

    <div class="col-md-9" style="width: 100%" >
        <div class="row" style="background-color:#C4C4C4">

        <div class="col-md-3" style="margin: 40px 0 0 0" >
            <?php
                include('component/image_component.php');
            ?>
        </div>


            <div class="col-md-9">
            
            <?php
                include('component/profile_component.php');
            ?>
            </div>

            
        </div>
    </div>
  </div>
</div>

<script src="./serviceAPI/detail-user-service.js"></script>
