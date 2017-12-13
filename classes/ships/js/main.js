$(function(){
    var i, j = 0;
    var niza = "";
    for(i=0; i<10; i++)
        {
            for(j=0; j<10; j++)
                {
                niza+="<div class='pole'></div>";
                }
            niza+="<div class='clear'></div>"
        }
    $("#more").append(niza);

})
