$(function () {

    //        https://api.github.com/search/repositories
//    $('#input').on('keyup', function () {
//            var momentalnoKarakteri = this.value.length;
//            console.log(momentalnoKarakteri);
//            if (momentalnoKarakteri >= 3) {
//                $.get('https://api.github.com/search/repositories?q=' + this.value, function (data) {
//                    console.log(data);
//                    var elements = '';
//                    for (var i = 0; i < 3; i++) {
//                        elements += "<li reden-broj='" + i + "' class='item'>" + data.items[i].name + "</li>"
//                    }
//                    $('#results').html("").append(elements);
//
//                    $('.item').on('click', function () {
//                        $('#details').html(data.items[$(this).attr('reden-broj')].name)
//
//                    })
//                })
//            }
//        }
//    })


    $('#search').on('click', function(){
        var vrednost = $('#input').val();
        console.log(vrednost);

        $.get('https://api.github.com/search/repositories?q=' + vrednost, function(data){
            console.log(data);
        })
    })












})
