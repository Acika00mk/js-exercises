var nasInterval;
var momentalniSekundi = 0;

function startCounting() {
    momentalniSekundi++;
    $('#sekundi').html(momentalniSekundi)
}

function start() {
    nasInterval = setInterval(startCounting, 1000)
}

function stop() {
    clearInterval(nasInterval);
    momentalniSekundi = 0;
    $('#sekundi').html(momentalniSekundi)

}

$('#start').on('click', start);
$('#stop').on('click', stop);


$('#brisi').on('click', function(){
    $('#sekundi').remove();
})
