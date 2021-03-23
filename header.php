<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/icofont/icofont.min.css">
  <link rel="stylesheet" href="./css/header.css">
</head>

<body>
  <header>
    <div class="header">

      <div class="header__logo">
        <div class="header__nav--icon" id="mb">
          <i class="icofont-navigation-menu"></i>
        </div>
        <a href="index.php" class="header__link logo">
          <img style="width: 100px;" src="assets/images/logo.png" wi alt="" srcset="">
        </a>

        <div class="null" id="null"></div>
        <div class="logo-mb"><a href="index.php">
            <img style="width: 130px;" src="assets/images/logo.png" wi alt="" srcset="">
          </a></div>
        <div class="header__listpage" id="listpage-mb">
          <ul class="header__list">
            <li class="header__item">
              <a href="question.php" class="header__link header__page"> ĐẶT CÂU HỎI</a>
            </li>
            <li class="header__item">
              <a href="listquestion.php" class="header__link header__page"> DANH SÁCH CÂU HỎI</a>
            </li>
            <li class="header__item">
              <a href="#" class="header__link header__page"> QUẢN LÝ USER</a>
            </li>
            <li class="header__item">
              <a href="#" class="header__link header__page"> QUẢN LÝ CÂU HỎI</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="header__listpage" id="listpage">
        <ul class="header__list">

          <li class="header__item">
            <a href="index.php" class="header__link header__page">TRANG CHỦ</a>
          </li>

          <li class="header__item">
            <a href="question.php" class="header__link header__page"> ĐẶT CÂU HỎI</a>
          </li>
          <li class="header__item">
            <a href="listquestion.php" class="header__link header__page"> DANH SÁCH CÂU HỎI</a>
          </li>
          <li class="header__item dropd" id="dropd">
            <a href="#" class="header__link header__page drop-up"> QUẢN LÝ</a>
            <div class="drop">
              <a href="manageuser.php" class="drop-link">QUẢN LÝ USER</a>
              <a href="managequestion.php" class="drop-link">QUẢN LÝ CÂU HỎI</a>
              <a href="specialist-manager/specialist-manager.php" class="drop-link">QUẢN LÝ DANH MỤC KHOA</a>x
            </div>
          </li>
        </ul>
      </div>

      <div>

        <div class="header__logg" id="logg-mb">
          <div class="header__logo--mb">
            <a class="header__link" href="index.php">
              <img style="width: 66px;" src="assets/images/logo.png" wi alt="" srcset="">
            </a>
          </div>
          <div class="logg" id="logg">
            <span><a href="/login.php" class="header__link login"> Đăng nhập</a></span>
            |
            <span><a href="/register.php" class="header__link login"> Đăng kí</a></span>
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
                <span id="userName"></span> <i class="icofont-hand-drawn-down"></i>
              </span>
            </div>
            <div class="header__option">
              <div class="arrow" id="arrow"></div>
              <ul class="header__option--list" id="list">
                <li class="header__option--item"><i class="icofont-ui-user"></i> Trang cá nhân</li>
                <a href="detail_user.php"><li class="header__option--item"><i class="icofont-info-circle"></i> Thông tin cá nhân</li></a>
                <li class="header__option--item" onclick="logout()"><i class="icofont-logout"></i> Đăng xuất</li>
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
      // logg.style.display = "flex";
      logged.style.display = "none";
    } else {
      logg.style.display = "none";
      logged.style.display = "flex";
    }
  }

  function logout() {
    delete_cookie('tokenId');
    delete_cookie('roles');
    delete_cookie('userName')
    delete_cookie('idU');

    window.location.replace("login.php");
  }

  checkLogged();

  function checkAdmin() {
    let data = getCookie("roles");
    if (data.search("ADMIN") && data.search("DOCTER") == -1) {
      document.getElementById("dropd").style.display = "none";
    }
  }

  // checkAdmin();
 
</script>
<?php
require "importjs.php"
?>
<script>
    $(document).ready(function () {
      const userName = getCookie("userName")
      $("#userName").html(userName)

      
      checkAdmin();

    });
</script>
</html>