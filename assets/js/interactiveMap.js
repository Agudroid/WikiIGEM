function displayText(identifier){
    numberOfElements=7; //Número total de elementos del mapa
    for (var i=0;i<numberOfElements+1;i++) {
        id = '#map' + i;
        $(id).fadeOut("fast");
    }
    identifier="#map"+identifier;
    $(identifier).fadeIn("fast");
}
