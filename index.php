<?php
    include('header.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Danh sách câu hỏi</title>
  <link rel="stylesheet" href="css/listquestion.css">
  <link rel="stylesheet" href="assets/icofont/icofont.min.css">
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="./vendors/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-
  hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/header.css">
</head>
<body>
    <div id='header'>
       <div class="container">
        <div id="textheader" class=" pb-3">
            <h1>
                Diễn đàn chuyên nghiệp lớn nhất đất nước Việt Nam gồm <strong><font style="vertical-align: inherit;">13.770
                </font></strong> bác sĩ
                <div class="mt-3">
                   <a href="login.php" id='linkLogin'>ĐĂNG NHẬP</a>
                </div>
            </h1>
        </div>
      
       </div>
       <div id="newtxt" class="mt-3 p-3">
            <div class="container">
                <h2 class="text-white">Trung tâm thông tin COVID-19 ở Việt Nam và Thế Giới</h2>
                <h3 class="mt-3">Tìm thông tin và tài nguyên mới nhất bằng cách truy cập trung tâm COVID-19 trên <a href="question-answer.invocker.repl.co">question-answer.invocker.repl.co</a>
                    Miễn phí cho các thành viên <a href="question-answer.invocker.repl.co">question-answer.invocker.repl.co</a>.
                </h3>
                <div class="mt-3">
                    <a href="#" id='linknew'>XEM TIN MỚI NHẤT</a>
                 </div>
            </div>
        </div>
    </div>
    
    <main class="mt-3 p-3">
        <div class="container">
            <div class="row" id="content">
                <div class="col-sm-4">
                    <div class='main-col'>
                        <a href="#"><i class="far fa-comments"></i></a>
                        <div class="col-header">
                            <h3>Diễn đàn</h3>
                            <p>Hàng nghìn bác sĩ sử dụng diễn đàn của chúng tôi mỗi ngày cho
                                các <b>câu hỏi lâm sàng</b> và <b>thảo luận chung</b> . 
                               Hầu hết các câu hỏi lâm sàng được trả lời trong vòng 5 phút.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class='main-col'>
                        <a href="#"><i style="color: #1c3e7a;font-size: 50px;" class="fas fa-users"></i></a>
                        <div class="col-header">
                            <h3 style="color: #1c3e7a;font-size: 40px;">Tham Gia</h3>
                            <p><b>Tham gia hoàn toàn miễn phí</b> - tất cả những gì bạn cần là đăng ký 
                                bằng email của bạn và một số thông tin cơ bản khác . <br> 
                                <div>TÌM HIỂU THÊM ></div></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class='main-col'>
                        <a href="#"><i class="far fa-envelope-open"></i></a>
                        <div class="col-header">
                            <h3>E- Mail</h3>
                            <p>Khi tham gia question-answer.invocker.repl.co, bạn sẽ nhận được thông báo từ địa chỉ email @ <b>question-answer.invocker.repl.co</b>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6 p-3" style="background-color: #029dd9;">
                    <h3 class="text-white">Bạn có phải là một tổ chức muốn làm việc với question-answer.invocker.repl.co?</h3>
                    <h5 class="mt-3">
                        Là một diễn đàn miễn phí chúng tôi cung cấp các thông tin về y tế miễn phí đến tất cả mọi người về y tế .
                        <div class="mt-3">TÌM HIỂU THÊM ></div>
                    </h5>
                </div>
                <div class="col-md-6 p-3" style="background-color: #c7d309;">
                    <h3 class="text-white">Nhà tuyển dụng và công việc tuyển dụng </h3>
                    <h5 class="mt-3">
                        Đăng công việc, chạy chiến dịch tuyển dụng, quảng bá các sự kiện và khóa học liên quan đến y tế, 
                        chia sẻ tài liệu, 
                        gửi email trực tiếp, tải xuống các tài liệu và hơn thế nữa ...
                        <div class="mt-3">TÌM HIỂU THÊM ></div>
                    </h5>
                </div>
            </div>
        </div>
    </main>
    <div id="contact">
        <div id="contact-header">
            <img src="./assets/images/logo.png" alt=""> <span>Doctor Elephant</span>
        </div>
    </div>
    <footer class="p-3 text-white">
        <div class="container">
            <div id="footer-header">
                <h5>Doctor Elephant</h5>
                <div>
                   <span> Chúng tôi trên các nền tảng khác :  &nbsp;
                    <i class="fab fa-facebook-f"></i> &nbsp;
                    <i class="fab fa-twitter"></i>
                   </span>
                </div>
            </div>
            <div id='footer-bottom' class="mt-3">
                <ul style="display: flex;margin-left: -40px;">
                    <li>© 2021 Doctor Elephant</li>
                    <li><a href="#">Về chúng tôi</a></li>
                    <li><a href="#">Liên hệ chúng tôi</a></li>
                    <li><a href="#">Điều khoản và điều kiện</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                </ul>
                <ul>
                    <li>Phone : 08888888888</li>
                    <li>Gửi email tới <a href="#">doctorelephant@gmail.com</a></li>
                </ul>
            </div>
        </div>
    </footer>
</body>
</html>