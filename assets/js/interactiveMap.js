function DisplayText1() {
    $("#map3").fadeOut("fast", function () {
        $("#map2").fadeOut("fast", function () {
            $("#map1").fadeIn("fast");
        });
    });
}
function DisplayText2() {
    $("#map3").fadeOut("fast", function () {
        $("#map1").fadeOut("fast", function () {
            $("#map2").fadeIn("fast");
        });
    });
}
function DisplayText3() {
    $("#map1").fadeOut("fast", function () {
        $("#map2").fadeOut("fast", function () {
            $("#map3").fadeIn("fast");
        });
    });
}