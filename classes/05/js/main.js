$(function () {
    //    var odLocalBrojcanik = localStorage.getItem('kliknato');
    //    $('#klikovi').html(odLocalBrojcanik);
    //
    //    $('#add').on('click', function(){
    //        var key = $('#key').val();
    //        var value = $('#input').val();
    //        localStorage.setItem( key, value);
    //    })
    //
    //    $('#remove').on('click',function(){
    //        var key = $('#key').val();
    //        localStorage.removeItem(key);
    //    })
    //
    //
    //    $('#dont').on('click', function(){
    //        odLocalBrojcanik = localStorage.getItem('kliknato');
    //        odLocalBrojcanik++;
    //        localStorage.setItem('kliknato', odLocalBrojcanik);
    //        $('#klikovi').html(odLocalBrojcanik);
    //    })
})

var elementStoGoVlecam;

function dragStart(event) {

    console.log('dragggg');
    console.log(event.target)
    elementStoGoVlecam = event.target;
}

function dropped(event) {
    event.preventDefault();
    console.log('dropped');
    $('.bazen').append($(elementStoGoVlecam))

}

function dragOver(event) {
    event.preventDefault();
    console.log('da');
}

function enter() {
    $('.bazen').css('background', 'red');
}

function leave() {
    $('.bazen').css('background', 'lightblue');
}
