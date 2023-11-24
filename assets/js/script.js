AOS.init();

$(document).ready(function () {
    // Close the navbar when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.navbar').length && $('.navbar-collapse').hasClass('show')) {
            $('.navbar-toggler').click();
        }
        $('.navbar .nav-link').on('click', function () {
            // Your code to execute when a nav link is clicked
            $('.navbar-toggler').click(); // This will simulate a click on the toggler
        });
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

    var carimg = $('.amenities').height();
    $('.amenities .carousel img').css('height', carimg);
    $(window).resize(function () {
        if ($(window).width() > 768) {
            var carimg = $('.amenities').height();
            $('.amenities .carousel img').css('height', carimg);
        }
    })
});
