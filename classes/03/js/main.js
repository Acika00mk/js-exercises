$(function () {

    $('#get').on('click', function () {
        $.get('http://api.icndb.com/jokes/random?firstName=Ivan&lastName=Iscelitel', function (data) {
            $('#joke').html(data.value.joke)
        })
    });
})
