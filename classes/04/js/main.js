$(function () {
    $($('.gallery__content-image')[0]).addClass('gallery__content-image--active');

    $('#napred').on('click', function(){
        var aktivnaSLika = $('.gallery__content-image--active');

        var naredenElement = aktivnaSLika.next();
        if(!naredenElement.length){
            naredenElement = $($('.gallery__content-image')[0]);
        }

        aktivnaSLika.removeClass('gallery__content-image--active');

        naredenElement.addClass('gallery__content-image--active');
    });

    $('#nazad').on('click', function(){
        var aktivnaSLika = $('.gallery__content-image--active');

        var naredenElement = aktivnaSLika.prev();
        console.log(naredenElement)

        if(!naredenElement.length){
            var posledenElementIndex =
                $('.gallery__content-image').length -1;
            var naredenElement =
                $($('.gallery__content-image')[posledenElementIndex]);
        }



        aktivnaSLika.removeClass('gallery__content-image--active');

        naredenElement.addClass('gallery__content-image--active');




    })



})
