$(document).mousemove(function(event) {

    $("#moveme").css("left", event.pageX - 250 / 2);
    $("#moveme").css("top", event.pageY - 250 / 2);

});
$(document).on("click", (function() {
    (this).off("mousemove");

    $("#moveme").css("left", event.pageX - 250 / 2);
    $("#moveme").css("top", event.pageY - 250 / 2);


}));