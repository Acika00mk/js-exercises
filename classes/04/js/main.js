$(function () {

    //        https://api.github.com/search/repositories
var inProgress = false;
    $('#input').on('keyup', function () {
        var momentalnoKarakteri = this.value.length;
        console.log(momentalnoKarakteri);
        if(momentalnoKarakteri >= 3) {

           if(!inProgress){
               inProgress = true; $.get('https://api.github.com/search/repositories?q=' + this.value, function (data) {
                console.log(data);
                var elements = '';
                for(var i = 0; i < 3; i++){
                    elements += "<li reden-broj='"+i+"' class='item'>"+ data.items[i].name + "</li>"
                }
                $('#results').html("").append(elements);

                $('.item').on('click', function(){
                 $('#details').html(data.items[$(this).attr('reden-broj')].name)

                })
                inProgress = false ;
            })
        }
            else {
                alert('Vo progres e uste cekaj malce ')
            }
        }
    })

})
