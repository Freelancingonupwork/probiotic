(function ($) {
  "use strict";
  var POTENZA = {};

/*************************
  Predefined Variables
*************************/
  var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $countdownTimer = $('.countdown'),
    $counter = $('.counter');
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };


/*************************
         Sticky
*************************/
POTENZA.isSticky = function () {
  $(window).on('scroll',function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".header").removeClass("sticky-top");
        }else{
            $(".header").addClass("sticky-top");
        }
    });
};






  
  






/****************************************************
     POTENZA Window load and functions
****************************************************/
  //Document ready functions
  $document.ready(function () {
    POTENZA.isSticky();
  });


})(jQuery);
