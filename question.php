<?php
include('header.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>question</title>
    <link rel="stylesheet" href="./css/question.css">
    <link rel="stylesheet" href="./vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-
    hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div id="content" class="mb-3  pt-3 pb-3 box-shadow">
                    <div class="container">
                        <div id="ct-frm">


                            <form action="" method="POST" enctype="multipart/form-data">
                                <h4>Hỏi đáp bác sĩ trực tuyến</h4>
                                <div class="mb-3">
                                    <label for="question" class="form-label mt-3">

                                        <span>Chia sẻ vấn đề sức khoẻ của bạn với bác sĩ *</span>
                                    </label>
                                    <textarea name="question" id="question" rows="3" class="box-shadow form-control"
                                        placeholder="Hãy nói về sức khỏe của bạn với các triệu chứng, loại thuốc hiện tại, giới tính, tuổi, chiều cao và cân nặng."></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="formFileMedia" class="form-label mt-3" id="label-img">
                                        <i class="far fa-images"></i>
                                        Đính kèm ảnh về tình trạng sức khỏe của bạn
                                    </label>
                                    <!-- <input type="file" class="box-shadow form-control-file border" id="formFileMedia" > -->
                                </div>
                                <div id="note" class="mb-3">* Hình ảnh cá nhân của bạn hoàn toàn được bảo mật, chỉ bác
                                    sĩ mới có thể xem.</div>
                                    <button name='btnQuestion' id="button" class="btn btn-primary" onclick="return addquestion();">Đặt câu hỏi</button>
                            </form>
                        </div>


                        <!-- <input id="formSubmit" style="width: 100%;" type="submit" class="btn btn-primary block mt-3" value="Đặt câu hỏi" onclick="addQuestion()"> -->
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div id="content">
                    <div style="width: 100%;">
                        <svg class="mb-3" id="" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="512" height="512" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0" transform="scale(0.00195312)" />
                                </pattern>
                                <image id="image0" width="512" height="512" href="./assets/images/tasking-doctor"/>
                            </defs>
                        </svg>
                        <div id="frm-check" class="mt-3">

                            <input id="s1" type="checkbox" class="switch" checked>
                            <label for="s1">
                                <span id="lengthOn">
                                    Có 32 bác sĩ trực tuyến
                                </span>
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="contact" class="box-shadow p-3 m-3">
            <div class="row">
                <div class="col-md-2" id='col-img'> 
                    <img id="img-contact" class="img-fluid" src="./assets/images/register.jpg" alt="">
                </div>
                <div class="col-md-10">
                    <p>Hỏi bác sĩ trực tuyến và <span>nhận tư vấn y tế</span> nhanh
                        chóng cho các thắc mắc về sức khỏe của bạn.
                        Ban y tế của chúng tôi bao gồm hơn <span>1000 bác sĩ</span>
                        từ hơn <span>80 chuyên khoa</span>.</p>
                    <div class="row">
                        <div class="col-lg-6 mt-3">
                            <p id="sample">Từ khóa phổ biến</p>
                        </div>
                        <div class="col-lg-6">
                            <div class="container mt-3 p-3" id="category-question">
                                <span class="badge badge-primary"><a href="#">Bác sỹ</a></span>
                                <span class="badge badge-primary"><a href="#">Chăm sóc răng miệng</a></span>
                                <span class="badge badge-primary"><a href="#">Hỏi về thai nhi</a></span>
                                <span class="badge badge-primary"><a href="#">Hỏi về da liễu</a></span>
                                <span class="badge badge-primary"><a href="#">Hỏi về răng hàm mặt</a></span>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- auth: Vũ Văn TIến -->
<?php 
    if(isset($_POST['btnQuestion'])) {
        if(isset($_COOKIE['tokenId'])) {
            echo '
            <script>
                function addquestion() {
                    let question = document.getElementById("question").value;
                    addQuestion(question);
                    // alert("Gửi thành công câu hỏi của bạn đang chờ được kiểm duyệt .")
                    return false;
                }
            </script>
            ';
        }else {
            echo '<script>
                    $.notify("Bạn cần đăng nhập để đặt câu hỏi !!!", "warn");
                </script>';
            header('Refresh:2; url=login.php',true, 303);
        }
    }
?>

<?php
require "importjs.php"
?>
</body>

</html>