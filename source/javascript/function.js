$(document).ready(function() {
  // Nav on scroll stick
  $(window).scroll(function() {
    // If we have scrolled more than 10px
    if ($(document).scrollTop() > 10) {
      // Add class "fixed" to header element
      $("nav").addClass("fixed");
      // Otherwise
    } else {
      // If header already has "fixed" class
      if ($("nav").hasClass("fixed")) {
        // Remove said class
        $("nav").removeClass("fixed");
      }
    }
  });
  // carousel
  $("#Glide").glide({
    type: "carousel",
    autoplay: "5000",
    startAt: "2"
  });
  // Hamburger toggler
  $(document).ready(function() {
    $('.menu-toggle').on('click', function() {
      $('.menu-toggle').toggleClass('active');
    });
  });
});
