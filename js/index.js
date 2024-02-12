$(document).ready(() => {
  //show nav in mobile
  $(".fa-bars").on("click", function () {
    $(".links").toggleClass("show-nav");
  });

  // active class when click on menu links

  $(".links a").on("click", function () {
    $(".links a").removeClass("active");
    $(this).addClass("active");
  });
  // when scroll close nav if open in mobile
  $(window).on("scroll", function () {
    $(".links").addClass("show-nav");
    $(".menu").addClass("show-menu");
  });
  // show profile menu
  $(".profile img").on("click", function () {
    $(".menu").toggleClass("show-menu");
  });
  // dark mode and handel other section on dark mode
  $(".toggle-switch").on("click", function () {
    $(this).toggleClass("active");
    $("body").toggleClass("dark");
    $("figcaption div.avatar p span").toggleClass("text-white");
  });

  // toggle class fav icon
  $("i.fa-heart").on("click", function () {
    if ($(this).hasClass("fa-solid")) {
      $(this).removeClass("fa-solid like");
    } else {
      $(this).addClass("fa-solid like");
    }
  });

  $(document).on("click", ".container-shadow .fa-circle", function () {
    $(this).removeClass("fa-circle fa-regular");
    $(this).addClass("fa-circle-check fa-solid");
  });

  $(document).on("click", ".container-shadow .fa-circle-check", function () {
    $(this).removeClass("fa-circle-check fa-solid");
    $(this).addClass("fa-circle fa-regular");
  });

  // increment & decrement Services
  $("#btn-increment").on("click", function () {
    if ($("#counter").html() > 1) {
      let x = parseInt($("#counter").html()) - 1;
      $("#counter").html(x);
      $("#total").html("$" + x * 100);
    } else {
      $("#counter").html(1);
      $("#total").html("$" + 100);
    }
  });
  $("#btn-decrement").on("click", function () {
    let x = parseInt($("#counter").html()) + 1;
    $("#counter").html(x);
    $("#total").html("$" + x * 100);
  });
  // push new Purchase Service
  $("#btn-Purchase").on("click", function () {
    $(".services").append(`<div class="container-shadow">
              <p>
                <i class="fa-regular fa-circle"></i>
                <span
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor
                  sit amet.
                </span>
              </p>
              <p>
                <span>${$("#total").html()}</span>
                <span>${$("#counter").html() + " days"}</span>
              </p>
            </div>`);
  });
  // add rewiew
  $("#post-review").on("click", function () {
    if ($("#input-review").val()) {
      $(".display-no-review").addClass("show-review");
      $(`<div class="review-card">
                <div>
                  <img src="./images/PosterAvatar.png" alt="PosterAvatar" />
                </div>
                <div>
                  <h5>Jane Smith</h5>
                  <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star notfav"></i>
                    <span> . 1 second </span>
                  </div>
                  <p>
                   ${$("#input-review").val()}
                  </p>
                </div>
              </div>`).insertBefore(".create-review");
      $("#input-review").val("");
    } else {
      $(".display-no-review").removeClass("show-review");
    }
  });

  // List of image URLs
  let images = [
    "./images/banner.png",
    "./images/banner.png",
    "./images/banner.png",
  ];
  function changeImage(index) {
    $(".slider img").fadeOut(500, function () {
      $(this).attr("src", images[index]).fadeIn(500);
    });
  }
  let currentIndex = 0;

  $(".fa-angle-right").on("click", function () {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    changeImage(currentIndex);
  });

  $(".fa-angle-left").on("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
  });
});
