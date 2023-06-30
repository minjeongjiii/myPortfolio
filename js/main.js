/* scrollTo */
$(function() {
    const menuBtn = $('.lnb li a')
    menuBtn.click(function(){
        $(window).scrollTo(this.hash || 0, 1000)
    }) 
});

/* mousewheel */
/* $(function() {
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
}); */

document.addEventListener('DOMContentLoaded', function(){
  
  /* about scroll event */

  /* const aboutInner = document.getElementById('about_inner');
  window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    aboutInner.style.width = 700 + value * 5 + 'px';
    aboutInner.style.height = 500 + value * 3 + 'px';
    aboutInner.style.right = 135 + value * -1 + 'px';
    aboutInner.style.bottom = 75 + value * -1 + 'px';
  });
  window.addEventListener('scroll','wheel', (e)=>{
    const delta = e.deltaY * 0.2;
  }); */

  /* 현재 년/월/일 정보 가져오기 */
  const date = new Date;
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth()+1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const dateStr = year + '-' + month + '-' + day;

  let today = this.getElementById('today')
  let dateText = document.createTextNode(dateStr)

  today.appendChild(dateText)

});