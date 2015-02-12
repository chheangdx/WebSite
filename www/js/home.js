$(document).ready(function () {
    //Banner Functions
    $(".logo").click(function () {
        window.location.href = "start.html";
    });
    //Ad Functions
    $("#adMain").click(function () {
        window.location.href = "http://www.starbucks.com/";
    });
    $("#adMain").hover(function () {
        $(this).css("opacity", "0.75");
        $(this).css("background-color", " rgba(0, 200,200,0.9)");
    }, function(){
        $(this).css("opacity", "1");
         $(this).css("background-color", " rgba(0,128,128,0)");
    });

    //Navigation Bar Functions
    $("#navWebsites, #selectionWebsites").hover(function () {
        $(this).css("color", "white");
        $("#selectionWebsites").show();
    }, function () {
        $(this).css("color", "cyan");
        $("#selectionWebsites").hide();
    });
    $("#navDevTools, #selectionDevTools").hover(function () {
        $(this).css("color", "white");
        $("#selectionDevTools").show();
    }, function () {
        $(this).css("color", "cyan");
        $("#selectionDevTools").hide();
    });
    $("#navGames, #selectionGames").hover(function () {
        $(this).css("color", "white");
        $("#selectionGames").show();
    }, function () {
        $(this).css("color", "cyan");
        $("#selectionGames").hide();
    });
    $("#navAboutUs, #selectionAboutUs").hover(function () {
        $(this).css("color", "white");
        $("#selectionAboutUs").show();
    }, function () {
        $(this).css("color", "cyan");
        $("#selectionAboutUs").hide();
    });
});