$(function () {

    $('.kocka').on('click', function(){
        alert("Bravo");
    })

    $("html").mousemove(function(e) {
        var kocka = $('.kocka');
        var kockaLeft = $(".kocka").offset().left;
        var kockaTop = $(".kocka").offset().top;
        var mouseLeft = e.clientX;
        var mouseTop = e.clientY;


        if( mouseLeft <  ( kockaLeft + 70) && mouseLeft> (kockaLeft + 50)   ){
            kocka.animate({'left' : kockaLeft - 10 + 'px'}, 1)
        }


        if(mouseTop < (kockaTop + 70) && mouseTop > kockaTop + 50){
            kocka.animate({'top' : kockaTop - 10 + 'px'}, 1)
        }


    console.log(mouseLeft, mouseTop, kockaLeft, kockaTop );
})


})
