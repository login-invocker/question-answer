<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/icofont/icofont.min.css">
  <link rel="stylesheet" href="css/header.css">
</head>

<body>
  <header>
    <div class="header">
      <div class="header__nav--icon" id="mb">
        <i class="icofont-navigation-menu"></i>
      </div>
      <div class="header__logo"><a href="home.php" class="header__link">logo</a></div>

      <div class="header__listpage" id="listpage">
        <ul class="header__list">
          <li class="header__item">
            <a href="question.php" class="header__link header__page"> ĐẶT CÂU HỎI</a>
          </li>
          <li class="header__item">
            <a href="listquestion.php" class="header__link header__page"> DANH SÁCH CÂU HỎI</a>
          </li>
          <li class="header__item">
            <a href="#" class="header__link header__page"> GIỚI THIỆU</a>
          </li>
        </ul>
      </div>
      <div class="header__logg" id="logg">
        <div class="header__logo--mb">
          <a href="header__link">LOGO</a>
        </div>
        <div class="logg">
          <span><a href="login.php" class="header__link login"> Đăng nhập</a></span>
          |
          <span><a href="register.php" class="header__link login"> Đăng kí</a></span>
        </div>
      </div>
      <div>

        <div class="header__logged">
          <div class="header__notification">
            <span class="notification">
              <i class="icofont-alarm"></i>
            </span>
            <span class="header__number">13</span>
            <div class="header__notice">
              <p class="header__detailed">
                Continuous Integration can help catch bugs by running your tests automatically, while Continuous Deployment can help you deliver code to your product environment.
              </p>
            </div>


          </div>
          <div class="header__user" id="option">
            <div>
              <img src="assets/images/register2.jpg" alt="anh user" class="header__img" style="width: 35px; height: 35px;">
            </div>
            <span class="header__username">
              user123 <i class="icofont-hand-drawn-down"></i>
            </span>
          </div>
          <div class="header__option">
            <div class="null" id="null"></div>
            <div class="arrow" id="arrow"></div>
            <ul class="header__option--list" id="list">
              <li class="header__option--item"><i class="icofont-ui-user"></i> Trang cá nhân</li>
              <li class="header__option--item"><i class="icofont-info-circle"></i> Thông tin cá nhân</li>
              <li class="header__option--item"><i class="icofont-logout"></i> Đăng xuất</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</body>

<script>
  let option = document.getElementById("option");
  let overlay = document.getElementById("null");
  let mb = document.getElementById("mb");
  let listpage = document.getElementById("listpage");
  let logg = document.getElementById("logg");

  option.addEventListener("click", () => {
    document.getElementById("arrow").style.display = "block";
    document.getElementById("list").style.display = "block";
    document.getElementById("null").style.display = "block";
  });

  overlay.addEventListener("click", () => {
    document.getElementById("arrow").style.display = "none";
    document.getElementById("list").style.display = "none";
    document.getElementById("listpage").style.display = "none";
    document.getElementById("logg").style.display = "none";
    document.getElementById("null").style.display = "none";

  });

  mb.addEventListener("click", () => {
    document.getElementById("listpage").style.display = "block";
    document.getElementById("null").style.display = "block";
    document.getElementById("logg").style.display = "block";


  });

  
</script>

</html>