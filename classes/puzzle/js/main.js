$(function(){
    var puzzles  = ['0-0' , '0-1', '0-2',
                    '1-0', '1-1', '1-2',
                    '2-0', '2-1', '2-2'];
    var pieces = ""
    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
    var newArray = puzzles;
    shuffleArray(newArray);


    for(var i=0; i< 9; i++){
        pieces += "<div class='piece image-"+newArray[i]+"'> </div>"
    }
    $('.puzzle figure').html("");
    $('.puzzle figure').append(pieces);

})
