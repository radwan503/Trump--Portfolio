$(document).ready(function ($) {
            "use strict";
            	// WOW Js Active
	             new WOW().init();
         
    // ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
      //testmonial
  $('.owl-carousel-testmonial').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    items:1,
   
});
    //team
  $('.owl-carousel-team').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    items:4,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
    //pre-loader
     $('#ud_dots').delay(750).fadeOut(300, function () {
            $('#ud_bg_left').animate({
                left: '-50%'
            }, 300);
            $('#ud_bg_right').animate({
                right: '-50%'
            }, 300, function () {
                $('#ud_preloader').fadeOut(10);
            });
        });
       
    
            var stickyNavTop = $('.navbar-default').offset().top;
            // our function that decides weather the navigation bar should have "fixed" css position or not.
            var stickyNav = function () {
                var scrollTop = $(window).scrollTop(); // our current vertical position from the top
                // if we've scrolled more than the navigation, change its position to fixed to stick to top,
                // otherwise change it back to relative
                if (scrollTop > stickyNavTop) {
                    $('.navbar-default').addClass('sticky');
                }
                else {
                    $('.navbar-default').removeClass('sticky');
                }
            };
            stickyNav();
            // and run it again every time you scroll
            $(window).scroll(function () {
                stickyNav();
            });
//popup
    
    $('.youtube-video').magnificPopup({
  type: 'iframe',
  iframe: {

  patterns: {
    youtube: {
      index: 'youtube.com/', 

      id: 'v=', 

      src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
    }

  },

  srcAction: 'iframe_src', 
}
});
    

$('.skillbar').skillBars({
  // options here
});
    //counter
    $('.counter-num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    //portfolio
    var mixer = mixitup('.portfolio-content');
    
    //portfolio popup
      $('.image-link').magnificPopup({type:'image'});
    
    //sticky navbar
         $('.nav li a').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body').animate({
                            scrollTop: targetOffset
                        }, 1000);
                        return false;
                    }
                }
            });
  
    
}(jQuery));




