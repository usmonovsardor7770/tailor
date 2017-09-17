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
