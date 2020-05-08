$('.first').on('click', function(){
    // event.preventDefault();
    $(this).find('.second').slideToggle(500);
    $(this).find('.roplus').toggleClass('plusAnimate');
});



