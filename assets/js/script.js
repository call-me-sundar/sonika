$(document).ready(function() {
    // Close the navbar when clicking outside
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.navbar').length && $('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler').click();
      }
    });
  });