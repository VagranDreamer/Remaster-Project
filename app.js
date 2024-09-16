// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//     });
// }

// slider//

var sliderSelector = '.swiper-container',
options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides : true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 60,
        modifier: 1,
        slideShadows : true,
    },
    grabCursor: true,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 2,
            spaceBetween: -80
        }        
        }
};
var mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();

// Картинка до и после
(function($) {
    var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewAfter = $(".view-after");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);

(function($) {
    var $dragMe = $(".dragme-two"),
    $container = $(".sl-container-two"),
    $viewAfter = $(".view-after");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);

// Сайдбар для статьи
var markOne = $('#m1');
var markTwo = $('#m2');
var markThree = $('#m3');
var markFour = $('#m4');

$(".btn").click(function() {
  $(".hidden").slideToggle()
});

var scrolled;
$(function() {
  $(window).scroll(function() {
    scrolled = $(window).scrollTop();
    var scrollMarkOne = $('#b1').offset().top;
    var scrollMarkTwo = $('#b2').offset().top;
    var scrollMarkThree = $('#b3').offset().top;
    var scrollMarkFour = $('#b4').offset().top;

    if (scrolled >= scrollMarkOne && scrolled < (scrollMarkTwo)) {
       $('ul li a.articles_sidebar').removeClass('active');
      markOne.addClass('active');
    } else if (scrolled >= scrollMarkTwo && scrolled < (scrollMarkThree)) {
        $('ul li a.articles_sidebar').removeClass('active');
      markTwo.addClass('active');
    } else if (scrolled >= scrollMarkThree && scrolled < (scrollMarkFour)) {
        $('ul li a.articles_sidebar').removeClass('active');
      markThree.addClass('active');
    } else if (scrolled >= scrollMarkFour) {
        $('ul li a.articles_sidebar').removeClass('active');
      markFour.addClass('active');
    }

  });
});