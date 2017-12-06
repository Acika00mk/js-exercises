$(function () {

    $('#get').on('click', function () {
        var value = $('#input').val();

        $.ajax('https://api.github.com/search/repositories', {
            "type": "GET",
            "data": {
                "q": value.split(' ').join('+')
            }
        }).success(function (data) {
            var elements = "";
            console.log(data);

            for (var i = 0; i < data.items.length - 1; i++) {
                elements += '<li>' + data.items[i].name + '</li>';
            }
            $('#results').append(elements);
        });

        //        $.get('https://api.github.com/search/repositories', function (data) {
        //            var elements = "";
        //
        //            for (var i = 0; i < data.total_count - 1; i++) {
        //                elements += '<li>' + data.items[i].name + '</li>';
        //            }
        //            $('#results').append(elements);
        //        })
    })


})
