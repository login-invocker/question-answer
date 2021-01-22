<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Danh sách câu hỏi</title>
  <link rel="stylesheet" href="css/listquestion.css">
</head>

<body>
  <main>
    <div class="page">

      <div id="sentences" class="sentences">
      </div>

      <div class="category">
        <h2>Loai hoi</h2>
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
  <div id="test"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="js/api/listquestion.js" type="module"></script>

</html>