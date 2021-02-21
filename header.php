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

      <div class="header__logo">
        <div class="header__nav--icon" id="mb">
          <i class="icofont-navigation-menu"></i>
        </div>
        <a href="home.php" class="header__link logo">logo</a>
        <div class="null" id="null"></div>
          <div class="header__listpage" id="listpage-mb">
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
      </div>

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

      <div>

        <div class="header__logg" id="logg-mb">
          <div class="header__logo--mb">
            <a class="header__link" href="home.php">LOGO</a>
          </div>
          <div class="logg" id="logg">
            <span><a href="login.php" class="header__link login"> Đăng nhập</a></span>
            |
            <span><a href="register.php" class="header__link login"> Đăng kí</a></span>
          </div>
        </div>
        <div>
          <div class="header__logged" id="logged">
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
    </div>
  </header>
</body>

<script>
  let option = document.getElementById("option");
  let overlay = document.getElementById("null");
  let mb = document.getElementById("mb");
  let listpage = document.getElementById("listpage-mb");
  let loggmb = document.getElementById("logg-mb");
  let logged = document.getElementById("logged");
  let logg = document.getElementById("logg");

  option.addEventListener("click", () => {
    document.getElementById("arrow").style.display = "block";
    document.getElementById("list").style.display = "block";
    overlay.style.display = "block";
  });

  overlay.addEventListener("click", () => {
    document.getElementById("arrow").style.display = "none";
    document.getElementById("list").style.display = "none";
    loggmb.style.display = "none";
    overlay.style.display = "none";
    listpage.style.display = "none";

  });

  mb.addEventListener("click", () => {
    listpage.style.display = "block";
    overlay.style.display = "block";
    loggmb.style.display = "block";
  });

  function isCookiesExist(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return true;
    }
    return false;
  }

  function checkLogged() {
    let token = isCookiesExist("tokenId");
    if (token) {
      logg.style.display = "flex";
      logged.style.display = "none";
    } else {
      logg.style.display = "none";
      logged.style.display = "flex";
    }
  }

  checkLogged();
</script>

</html>