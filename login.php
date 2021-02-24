<?php
include('header.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LogIn</title>
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
                    <img class="img-fluid" src="./assets/images/register2.jpg" alt="">
                </div>
                <div class="col-md-7" id="test">
                    <div class="container">
                        <div id="box">
                            <h1>Logo</h1>
                            <p class="mb-4">Đăng nhập vào tài khoản của bạn</p>
                            <!-- form -->
                            <form action="" id="frm">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Địa chỉ email hoặc use name" id="email">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="**********" id="pass">
                                </div>

                                <!-- submit -->
                                <input id="sub" onClick= "login()" type="button" class="btn btn-dark login-btn mb-2" value="Đăng Nhập">
                                <div id="loginFalse"></div>
                                <button class="btn btn-primary"><a href="#" class="text-white">
                                    <i class="fab fa-google-plus-square"></i> &nbsp; Đăng nhập bằng google</a></button>
                                
                                <div>
                                    <a href="#">
                                        <span>
                                            Quên mật khẩu ?
                                        </span>
                                    </a>
                                    
                                <div>
                                    <a href="register.php">
                                        <span>Chưa có tài khoản ? Đăng ký ở đây</span>
                                    </a>
                                </div>
                            
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php
require "importjs.php"
?>
   
</body>
</html>