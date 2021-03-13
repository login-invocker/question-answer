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
  <link href="css/pagination.css" rel="stylesheet" type="text/css">
</head>

<body>
  <div id="fb-root"></div>
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=472501510451429&autoLogAppEvents=1" nonce="w4uwdNqq"></script>
  <main>
    <div class="page">
      <div id="page">
          <div id="sentences" class="sentences">
          </div>
      </div>
      <div class="category" id="app">
        <h2 class="category__title">Chọn câu hỏi về loại khoa</h2>
        <div class="category__list">
          <span class="category__item" v-for="(specialist, index) in specialists"><a href="#" v-on:click="findBySpecalist(specialist.id)">{{specialist.name}}</a></span>
        </div>
      </div>

    </div>
  </main>
</body>

<script>
  function answer(id) {
    document.getElementById("show" + `${id}`).style.display = "block";
  }

  getQuestion(checkDoctor);

  function checkDoctor() {
    let btn = document.getElementsByClassName("action__btn").length;
    let btnMid = document.getElementsByClassName("btn-mid");
    const isDocter = checkRoleCookie("DOCTOR");

    if (!isDocter) {
      for (let i = 0; i < btn; i++) {
        btnMid[i].style.display = "none";
      }
    }
  }
</script>

<script src="./vendors/vue.js"></script>
<script src="./specialist-manager/specialist-manager.js"></script>

</html>