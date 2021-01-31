
<link rel="stylesheet" href="../vendors/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="./detail-question.css"/>

<div id="app">
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="content-question">
          {{question.content}}
        </div>
        <div class="name-specialist">
          - Chuyên khoa: {{question.nameSpecialist}}
        </div>

        <!-- Answers(commments) -->
        <h3>Trả lời câu hỏi</h3>
      </div>

      <!-- Đặt câu hỏi -->
      <div class="col-4">
        <div class="info-doctor">

        </div>
        <br>
        <div class="answer-doctor">

        </div>
      </div>
  </div>
</div>

<script src="../vendors/axios.min.js"></script>
<script src="../vendors/vue.js"></script>
<script src="./detail-question.js"></script>
