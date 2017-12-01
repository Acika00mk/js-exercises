


function proveri (){
    setTimeout(printaj, 100 );
}

function proveriInterval  (){
    console.log('od interval');
}


var nasInterval =  setInterval(proveriInterval , 100)



$('#kopce').on('click', proveri);

function printaj () {
    clearInterval(nasInterval);

}
