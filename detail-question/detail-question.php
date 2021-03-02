<?php
include('./header.php');
?>

<link rel="stylesheet" href="../vendors/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="./detail-question.css"/>

<div id="app">
  <div class="container">
    <div class="back-to-list-q">
    <a class="ck" v-bind:href="doman + '/listquestion.php'">Quay lại </a>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div class="info-user">
          Tùng 20 tuổi đã hỏi:
        </div>
        <br>
        <!-- Question -->
        <div class="question-info">
          <div class="content-question">
            {{question.content}}
          </div>
          <div class="name-specialist">
            - Chuyên khoa:  <a href="/specialist/id"class="ck"> {{question.nameSpecialist}}</a>
          </div>
        </div>

        <!-- Answers(commments) -->
        <h3>Trả lời câu hỏi</h3>
        <div class="answer"  v-for="comment in comments">
          
            <div class="answer__container">
              <img src="../assets/images/register.jpg" alt="anhbacsi" class="answer__img">
            </div>
            <div class="answer_info">
              <p class="answer__name">{{comment.user.full_name}}</p>
              <p class="answer__name">{{comment.user.specialist}}</p>
              <p id="answer" class="answer__text">{{comment.content}}</p>
            </div>
          </div>
         
      </div>

      <!-- Đặt câu hỏi -->
      <div class="col-sm-4">
        <div class="set-question">
        <table>
          <tr>
            <td rowspan="2">
            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="73">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 73H72V0H0V73Z" fill="white"/>
          </mask>
          <g mask="url(#mask0)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 73H72V0H0V73Z" stroke="white" stroke-opacity="0.01" stroke-width="0.02"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M47.5339 24.2668C55.1839 24.2668 62.2309 29.0438 64.6497 36.4007C66.6994 42.6331 65.5317 48.6123 62.4379 53.1314L64.4292 57.9996C64.8882 59.1265 63.7744 60.2535 62.6652 59.7881L57.8614 57.7715C54.9297 59.8361 51.3747 61.0519 47.5339 61.0519C39.7939 61.0519 32.6862 56.1609 30.3349 48.683C26.3434 35.9697 35.5887 24.2668 47.5339 24.2668Z" fill="#50A4FF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M47.5339 24.2668C35.5887 24.2668 26.3434 35.9697 30.3349 48.683C31.7277 53.1086 34.8079 56.5922 38.6757 58.7296C46.1749 56.8909 52.4884 51.3703 54.8622 43.7213C56.9547 36.9688 56.0637 30.4603 53.2287 25.1815C51.4152 24.5908 49.4959 24.2668 47.5339 24.2668Z" fill="#248EFF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6035 11.4062C19.7104 11.4062 10.7081 17.7709 7.82806 27.3682C5.54881 34.9761 7.04056 42.2396 10.8273 47.767L7.99681 54.6953C7.53556 55.8222 8.64931 56.9491 9.76081 56.4838L16.5941 53.6139C20.2864 56.2146 24.766 57.7476 29.6035 57.7476C39.3934 57.7476 48.3619 51.5356 51.298 42.0684C56.2549 26.0906 44.62 11.4062 29.6035 11.4062Z" fill="#7BBBFF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4506 31.6909V25.9216H26.7604V31.6909H21.0656V37.4625H26.7604V43.2341H32.4506V37.4625H38.1409V31.6909H32.4506Z" fill="white"/>
          </g>
        </svg>
            </td>
            <td>
           Đặt câu hỏi với Bác sĩ
            </td>
          </tr>
          <tr>
            <td>
            Nhận tư vấn miễn phí
              
            </td>
          </tr>
        </table>
            <textarea name="" id="" cols="30" rows="9"></textarea>
            <button type="button" class="btn btn-primary">Gửi câu hỏi</button>
        </div>
        <br>
        <div class="">

        </div>
      </div>
  </div>
</div>

<script src="../vendors/axios.min.js"></script>
<script src="../vendors/vue.js"></script>
<script src="./detail-question.js"></script>
