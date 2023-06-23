/* scrollTo */
$(function() {
    const menuBtn = $('.lnb li a')
    menuBtn.click(function(){
        $(window).scrollTo(this.hash || 0, 1000)
    }) 
});

/* mousewheel */
$(function() {
    $('.container section').mousewheel(function(event,delta){
      if(delta>0)  { 
        let prev = $(this).prev().offset().top
        $('html, body').stop().animate({
          scrollTop: prev
        },1000)
      } else if (delta<0) { 
        let next = $(this).next().offset().top
        $('html, body').stop().animate({
          scrollTop: next
        },1000)
      }
    })
});