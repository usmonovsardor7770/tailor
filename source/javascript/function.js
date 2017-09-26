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
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {

        window.location.hash = hash;
      });
    }
  });

  // Page Load
  pageAccelerator();

  // Testimonials
  function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
      var $next = $(this).next('.quote');
      fade($next.length > 0 ? $next : $(this).parent().children().first());
    });
  }
  fade($('.quoteLoop > .quote').first());

  //
});
