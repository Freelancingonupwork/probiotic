(function ($) {
  
  $(window).on('scroll',function(event) {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        $(".header").removeClass("sticky-top");
    }else{
        $(".header").addClass("sticky-top");
    }
  });

})(jQuery);
