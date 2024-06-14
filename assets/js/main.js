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
        setTimeout(function(){
            window.location.href = 'rental-item-search-results.html';
        }, 1000);
    });
    $(".filter-item-checkbox").click(function(){
        $(this).find(".checked").toggle();
    });
});