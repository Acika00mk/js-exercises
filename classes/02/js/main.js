function klikniMe() {
    console.log('da');
}

//$("#kopce").click(klikniMe())

$('#kopce').on("click" , klikniMe );


$('#kopce').on("mouseout" , klikniMe );
