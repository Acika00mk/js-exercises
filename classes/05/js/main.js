$(function () {
    var odLocalBrojcanik = localStorage.getItem('kliknato');
    $('#klikovi').html(odLocalBrojcanik);

    $('#add').on('click', function(){
        var key = $('#key').val();
        var value = $('#input').val();
        localStorage.setItem( key, value);
    })

    $('#remove').on('click',function(){
        var key = $('#key').val();
        localStorage.removeItem(key);
    })


    $('#dont').on('click', function(){
        odLocalBrojcanik = localStorage.getItem('kliknato');
        odLocalBrojcanik++;
        localStorage.setItem('kliknato', odLocalBrojcanik);
        $('#klikovi').html(odLocalBrojcanik);
    })


})
