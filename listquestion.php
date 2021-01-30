<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Danh sách câu hỏi</title>
  <link rel="stylesheet" href="css/listquestion.css">
  <link rel="stylesheet" href="assets/icofont/icofont.min.css">
</head>

<body>
  <main>
    <div class="page">

      <div id="sentences" class="sentences">

        <div class="sentence">
          <div class="question">
            <p id="question" class="question__text">Your path to learning English, step by step
              Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and
              rewarding. Our unique approach encourages continuous progression with a clear path to improve language
              skills. We have qualifications for schools, general and higher education, and business.</p>
          </div>

          <div class="action">
            <div class="action__view">
              <div class="action__view--like">
                <i class="icofont-ui-love"></i><span>12</span>
              </div>
              <div class="action__view--number">
                <i class="fas fa-heart"></i>
                33 lượt xem
              </div>
            </div>

            <div class="action__btn">

              <button class="action__btn--item" id="btn-love"><i class="icofont-love"></i> Yêu thích</button>
              <button class="action__btn--item btn-mid" onclick="answer()"><i class="icofont-speech-comments" ></i>Trả lời</button>
              <button class="action__btn--item"><i class="icofont-share"></i></i> Chia sẻ</button>

            </div>
          </div>

          <div class="addanswer show" id="show">
            <textarea name="" id="text-answer" cols="30" rows="10" placeholder="Nhập câu trả lời của bạn tại đây!"></textarea>
            <button class="btn-send">
              <img src="assets/images/icon-send.png" alt="img">
              <span class="">Gửi câu trả lời</span>
            </button>
          </div>

          <!-- <div class="answer">
            <div class="answer__container">
              <img src="assets/images/register.jpg" alt="anhbacsi" class="answer__img">
            </div>
            <div class="answer_info">
              <p class="answer__name">Bac si ka</p>
              <p id="answer" class="answer__text">Together we inspire learners to go further
                Our range of free teaching resources, lesson plans and activities is designed to help you prepare your
                students for our exams and tests. We also have a range of teaching qualifications, courses and support
                to help you develop as a teacher.</p>
            </div>
          </div> -->
        </div>

        <div class="sentence">
          <div class="question">
            <p id="question" class="question__text">Your path to learning English, step by step
              Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and
              rewarding. Our unique approach encourages continuous progression with a clear path to improve language
              skills. We have qualifications for schools, general and higher education, and business.</p>
          </div>

          <div class="action">
            <div class="action__view">
              <div class="action__view--like">
                <i class="icofont-ui-love"></i><span>12</span>
              </div>
              <div class="action__view--number">
                <i class="fas fa-heart"></i>
                33 lượt xem
              </div>
            </div>

            <div class="action__btn">

              <button class="action__btn--item" id="btn-love"><i class="icofont-love"></i> Yêu thích</button>
              <button class="action__btn--item btn-mid"><i class="icofont-speech-comments"></i>Trả lời</button>
              <button class="action__btn--item"><i class="icofont-share"></i></i> Chia sẻ</button>

            </div>
          </div>
<!-- 
          <div class="addanswer">
            <textarea name="" id="text-answer" cols="30" rows="10"></textarea>
            <button class="btn-send">
              <img src="assets/images/icon-send.png" alt="img">
              <span class="">Gửi câu trả lời</span>
            </button>
          </div> -->

          <div class="answer">
            <div class="answer__container">
              <img src="assets/images/register.jpg" alt="anhbacsi" class="answer__img">
            </div>
            <div class="answer_info">
              <p class="answer__name">Bac si ka</p>
              <p id="answer" class="answer__text">Together we inspire learners to go further
                Our range of free teaching resources, lesson plans and activities is designed to help you prepare your
                students for our exams and tests. We also have a range of teaching qualifications, courses and support
                to help you develop as a teacher.</p>
            </div>
          </div>
        </div>
        </div>

        <div class="category">
          <h2 class="category__title">Chọn câu hỏi về loại khoa</h2>
          <div class="category__list">
            <span class="category__item">Da lieu</span>
            <span class="category__item">Xuong khop</span>
            <span class="category__item">Dong y</span>
            <span class="category__item">Tay hoc</span>
            <span class="category__item">Dong y</span>
            <span class="category__item">Tay hoc</span>
          </div>
        </div>

      </div>
  </main>
</body>
<?php
require "importjs.php"
?>
<script>
  getQuestion();

  function answer(){
    document.getElementById("show").style.display = "block";
  }
</script>

</html>