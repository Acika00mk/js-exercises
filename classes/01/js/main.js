console.log("Selekcija na elementi");

console.log("by tags")
var  elementiOdTagovi;

elementiOdTagovi =  document.getElementsByTagName("h1");

console.log(elementiOdTagovi);


console.log(document.getElementById('paragraf'));


var byClass = document.getElementsByClassName('container');

console.log(byClass);


var i = 0;

var naslovi = document.getElementsByTagName('h1');

for(i = 0; i < naslovi.length ; i++ ){

    var momentalenNaslov = naslovi[i].innerHTML;

    var novNaslov = momentalenNaslov + i;

    naslovi[i].innerHTML = novNaslov;


    if(){
        naslovi[i].style.backgroundColor = 'red';
    }
}
