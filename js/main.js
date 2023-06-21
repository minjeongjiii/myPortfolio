$(function(){

    const menuBtn = $('.lnb li a')
    /* const page = $('.container section') */
    menuBtn.click(function(){
        $(window).scrollTo(this.hash || 0, 1000)
    }) 

    console.log(menuBtn)
    
});