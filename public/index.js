/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
!(function($) {
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          e.preventDefault();
          var target = $(this.hash);
          if (target.length) {

            var scrollto = target.offset().top;
            var scrolled = 20;

            if ($('#header').length) {
              scrollto -= $('#header').outerHeight()

              if (!$('#header').hasClass('header-scrolled')) {
                scrollto += scrolled;
              }
            }

            if ($(this).attr("href") == '#header') {
              scrollto = 0;
            }

            $('html, body').animate({
              scrollTop: scrollto
            }, 1500, 'easeInOutExpo');

            return false;
          }
        }
      });

       // Back to top button
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 150) {
        $('.give-popup').fadeIn('slow');
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.give-popup').fadeOut('slow');
        $('.back-to-top').fadeOut('slow');
      }
    });

    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });
    });


    })(jQuery);