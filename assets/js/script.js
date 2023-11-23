$(document).ready(function() {
    // Close the navbar when clicking outside
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.navbar').length && $('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler').click();
      }
    });

// navbar
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 100) {
            $('.navbar').addClass('nav-animate');
            if ($(this).scrollTop() > 500) {
                $('.navbar').addClass('nav-fixed');
            }
        }
        else {
            // Scrolling up
            $('.navbar').removeClass('nav-animate nav-fixed');
        }
    });
  });
