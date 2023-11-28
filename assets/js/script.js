try {
    $('spinner').show()
    $(document).ready(function () {
        AOS.init();
        // Close the navbar when clicking outside
        $(document).on('click', function (e) {
            if ($(window).width() <= 992) {
                if (!$(e.target).closest('.navbar').length && $('.navbar-collapse').hasClass('show')) {
                    $('.navbar-toggler').click();
                }
                $('.navbar .nav-link').on('click', function () {
                    // Your code to execute when a nav link is clicked
                    $('.navbar-toggler').click(); // This will simulate a click on the toggler
                });
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

        var carimg = $('.amenties').height();
        $('.amenties .carousel img, .plans .carousel img').css('height', carimg);
        $(window).resize(function () {
            if ($(window).width() > 768) {
                var carimg = $('.amenties').height();
                $('.amenties .carousel img , .plans .carousel img').css('height', carimg);
            }
        })

        if ($(window).width() > 1200) {
            var planswidth = $('.plans-left').width();
            $('.plans-right').css('left', `calc(${planswidth}px + 5%)`);
        }
        $(window).resize(function () {
            if ($(window).width() > 1200) {
                var planswidth = $('.plans-left').width();
                $('.plans-right').css('left', `calc(${planswidth}px + 5%)`);
            }
        })


        const sections = $('.projects .project-left');
        let highlightedSection = null; // Variable to track the currently highlighted section
        var audio = $('#myaudio')[0];

        $(window).scroll(function () {
            const scrollPosition = $(window).scrollTop();
            const windowHeight = $(window).height();

            sections.each(function () {
                const section = $(this);
                const sectionTop = section.offset().top;
                const sectionBottom = sectionTop + section.height();

                // Check if the section is in the middle of the screen
                if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom - windowHeight / 2) {
                    // Check if the section is not already highlighted
                    if (highlightedSection !== section[0]) {
                        sections.removeClass('highlight');
                        section.addClass('highlight');
                        audio.play();
                        highlightedSection = section[0];
                    }
                }
            });
        });


        $('.project-left').click(function () {
            var targetOffset = $(this).offset().top - ($(window).height() - $(this).outerHeight()) / 2;

            $('html, body').animate({
                scrollTop: targetOffset
            }, "fast"); // Adjust the duration as needed
        });



        // card creating

        // Your data - images and content for cards
        var cardData = [
            { image: 'assets/imagesandvectors/carousel/carousel_img_1.jpg', title: 'Card 1', text: 'Content for Card 1'},
            { image: 'assets/imagesandvectors/carousel/carousel_img_2.jpg', title: 'Card 2', text: 'Content for Card 2'},
            { image: 'assets/imagesandvectors/carousel/carousel_img_3.jpg', title: 'Card 3', text: 'Content for Card 3'},
            // Add more data as needed
        ];

        // Function to create a card element
        function createCard(image, title, text, num) {
            return `
            <div class="mb-3">
                <div class="card border-0 shadow-1">
                    <img src="${image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <a href="blog${num}.html">Luxery</a>
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `;
        }

        // Loop through cardData and append each card to the cardContainer
        for (var i = 0; i < cardData.length; i++) {
            var card = createCard(cardData[i].image, cardData[i].title, cardData[i].text,  i+1);
            $('#createcard').append(card);
        }

        $(".owl-carousel").owlCarousel({
            items: 3, // Number of items to display
            loop: true, // Infinite loop
            margin: 30, // Margin between items
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 2000, // Pause for 3 seconds between slides
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1, // Number of items to display on small screens
                },
                600: {
                    items: 2, // Number of items to display on medium screens
                },
                1000: {
                    items: 3, // Number of items to display on large screens
                }
            }
        });
    });
}
catch {
    alert(err)
} finally {
    $('#spinner').hide()
}