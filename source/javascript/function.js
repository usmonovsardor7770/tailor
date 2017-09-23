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

  // Carousel
  $("#Glide").glide({
    type: "carousel",
    autoplay: "5000",
    startAt: "2"
  });

  // Hamburger toggler
  $(".menu-toggle").on("click", function() {
    $(".menu-toggle, .overlay").toggleClass("active");
  });
  $(".overlay-content > a").on("click", function() {
    $(".menu-toggle, .overlay").removeClass("active");
  });

  // Dynamic Year for footer
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
  
  // Scroll on click the nav link
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ?
          target :
          $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate({
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
