/* ===========================================
        Preloader js
========================================== */
$(window).on('load', function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* ===========================================
        Team owl carousel
========================================== */
$(function () {
  $('#team-members').owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      480: {
        items: 2,
        nav: true
      }
    }
  });
});

/* ===========================================
        Progress bar
========================================== */
$(function () {
  $('#progress-elements').waypoint(function () {
    $('.progress-bar').each(function () {
      $(this).animate({
        width: $(this).attr('aria-valuenow') + '%'
      }, 2000);
    });
    this.destroy();
  }, { offset: 'bottom-in-view' });
});

/* ===========================================
        Responsive tabs js
========================================== */
$(function () {
  $('#services-tabs').responsiveTabs({
    startCollapsed: 'accordion',
    animation: 'slide', // The panels will slide up and down
  });
});
/* ===========================================
        Portfolio Isotope Filter
========================================== */
$(window).on('load', function () {
  // Initialize Isotope
  $('#isotope-container').isotope({
    // options here...
  });

  // filter items on button click
  $('#isotope-filters').on('click', 'button', function () {
    // Get filter value
    var filterValue = $(this).attr('data-filter');

    // Filter portfolio Items
    $('#isotope-container').isotope({
      // options here...
      filter: filterValue
    });

    // active button
    $('#isotope-filters').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/* ===========================================
        Magnific popup
========================================== */
$(function () {
  $('#portfolio-wrapper').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/* ===========================================
        Testimonial slider
========================================== */
$(function () {
  $('#testimonial-slider').owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  });
});
/* ===========================================
        Counter up for stats
========================================== */
$(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
});
/* ===========================================
        Clients owl carousel
========================================== */
$(function () {
  $('#clients-list').owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 3
      },
      480: {
        items: 4
      },
      768: {
        items: 6
      }
    }
  });
});
/* ===========================================
        White navigation on scroll
========================================== */
$(function () {

  // Show/Hide on Page Load
  showHideNav();

  $(window).on('scroll', function () {
    // Show/Hide on WIndows Scroll
    showHideNav();
  });

  function showHideNav() {

    if ($(window).scrollTop() > 50) {

      // show White navigation
      $('nav').addClass('white-nav-top');

      // Show dark logo
      $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');

      // Show Back to top Button
      $('#back-to-top').fadeIn();

    } else {

      // Hide white Navigation
      $('nav').removeClass('white-nav-top');

      // Show white logo
      $('.navbar-brand img').attr('src', 'img/logo/logo-white.png');

      // Hide Back to top Button
      $('#back-to-top').fadeOut();
    }

  }

});

/* ============================================
                Smooth Scroll
===============================================*/
$(function () {
  $('a.smooth-scroll').on('click', function (event) {
    event.preventDefault();

    // Get section ID like #about, #team ....
    var section_id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section_id).offset().top - 60
    }, 'easeInOutExpo');
  });
});

/* ===========================================
        Mobile Menu
========================================== */
$(function () {
  // Show mobile nav
  $('#mobile-nav-open-btn').on('click', function () {
    $('#mobile-nav').css("height", "100%");
    $('#mobile-nav-open-btn').hide();
    $('#mobile-nav-close-btn').show();
  });

  // Hide mobile nav
  $('#mobile-nav-close-btn, #mobile-nav a').on('click', function () {
    $('#mobile-nav').css("height", "0%");
    $('#mobile-nav-open-btn').show();
    $('#mobile-nav-close-btn').hide();
  });
});
/* ===========================================
        Wow js / Animate on Scroll
========================================== */
$(function () {
  new WOW().init();
});

$(function () {
  AOS.init({
    easing: 'ease-in-sine'
  });
});
/* ===========================================
        Keyframe animation
========================================== */
$(window).on('load', function () {
  $('#arrow-down').addClass('arrow-down-animation');
});

/* ===========================================
        Cursor animation
========================================== */
// let mouseCursor = document.querySelector('.cursor');
// let navLinks = document.querySelectorAll('.nav-links li');
// window.addEventListener("mousemove", cursor);

// function cursor(e) {
//   mouseCursor.style.top = e.pageY + 'px';
//   mouseCursor.style.left = e.pageX + 'px';
// }

// navLinks.forEach(link => {
//   link.addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("link-grow");
//     link.classList.remove("hovered-link");
//   });
//   link.addEventListener("mouseover", () => {
//     mouseCursor.classList.add("link-grow");
//     link.classList.add("hovered-link");
//   });
// });