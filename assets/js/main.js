$(document).ready(function(){
    $(".togglebar").click(function(){
        $(".bars ,.close").toggle();
    });
    $(".bars").click(function(){
        $(".right nav").animate({
            "left":"0"
        },500);
    });
    $(".close").click(function(){
        $(".right nav").animate({
            "left":"-200%"
        },500);
    });
    $(".item").click(function(){
        $(this).find(".checkmark").toggle();
    });
});