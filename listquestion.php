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
</head>

<body>
  <main>
    <div class="page">

      <div id="sentences" class="sentences">
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

  function answer() {
    document.getElementById("show").style.display = "block";
  }
</script>

</html>