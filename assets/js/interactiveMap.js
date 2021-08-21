function displayText(identifier){
    numberOfElements=3; //Número total de elementos del mapa
    for (var i=1;i<numberOfElements;i++) {
        id = '#map' + i;
        $(id).fadeOut("fast");
    }
    identifier="#"+identifier;
    $(identifier).fadeIn("fast");
}
