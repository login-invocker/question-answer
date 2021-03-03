<?php
include('header.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-
    hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
</head>
<body id="body">
    <div class="container">
        <div id="container">
            <div class="row">
                <div class="col-md-5">
                    <img class="img-fluid" src="./assets/images/register.jpg" alt="">
                </div>
                <div class="col-md-7" id="test">
                    <div class="container">
                        <div id="box">
                            <h1>Logo</h1>
                            <p class="mb-4">Đăng ký tài khoản của bạn</p>
                            <!-- form -->
                            <form action="">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Địa chỉ email " id="email" require autofocus>
                                </div>
                                
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your user name" id="username" require autofocus>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="**********" id="pass" require>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="**********" id="re-pass" require>
                                </div>
                                <input id="sub" onClick="register()" type="button" class="btn btn-dark login-btn mb-2" value="Đăng Ký">
                                <!-- <button onClick="register()">okeee</button> -->
                                <!-- <button class="btn btn-primary"><a href="#" class="text-white">
                                    <i class="fab fa-google-plus-square"></i> &nbsp; Đăng nhập bằng google</a></button> -->
                                
                                <div>
                                    <!-- <a href="#">
                                        <span>
                                            Quên mật khẩu ?
                                        </span>
                                    </a> -->
                                    
                                <div>
                                    <a href="login.php">
                                        <span>Trở về đăng nhập ??</span>
                                    </a>
                                </div>
                            
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>