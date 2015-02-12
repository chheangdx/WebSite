$(document).ready(function () {
    $("p").hover(function () {
        $(this).css("background-color", "red");
    }, function () {
        $(this).css("background-color", "gray");
    });
    $("p").mousedown(function () {
        $(this).css("background-color", "yellow");
    });
    $("p").mouseup(function () {
        $(this).css("background-color", "green");
    });
});
