const submitBtn = document.getElementById("submit-button");
const form = document.querySelector("form");
submitBtn.addEventListener("submit", () => {
  form.reset();
});
// call reCaptcha
function onSubmit(token) {
  document.getElementById("form").submit();
}

// bouncy letters
const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "rubberBand");
  })
);
spans.forEach((span) =>
  span.addEventListener("mouseout", function (e) {
    span.classList.remove("animated", "rubberBand");
  })
);

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $("#navbar").addClass("sticky");
    } else {
      $("#navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $("#scroll-up-btn").addClass("show");
    } else {
      $("#scroll-up-btn").removeClass("show");
    }
  });

  $("#scroll-up-btn").click(function (e) {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  // toggle navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation
  const typedSctringOne = ["CSS", "JavaScript", "jQuery", "React", "Node JS"];
  var typed = new Typed("#typing-1", {
    strings: [...typedSctringOne],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true,
  });
  const typedSctringTwo = [
    "Hello,",
    "Bonjour,",
    "Hola,",
    "Здравствуйте,",
    "नमस्ते,",
    "你好,",
  ];
  var typed = new Typed("#typing-2", {
    strings: [...typedSctringTwo],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel
  $(".owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
