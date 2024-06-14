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
     // Show the select-item-area when the input field is focused
     $('.salespersonname-area input').focus(function() {
        $('.select-item-area').show();
    });

    // Hide the select-item-area when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.salespersonname-area').length) {
            $('.select-item-area').hide();
        }
    });

    // Set the clicked li value to the input field and hide the select-item-area
    $('.select-item-area li').click(function() {
        var selectedValue = $(this).text();
        $('.salespersonname-area input').val(selectedValue);
        $('.select-item-area').hide();
    });

    // Toggle the select-item-area when clicking the angle down icon
    $('.anglearrow').click(function() {
        $('.select-item-area').toggle();
    });
   
});
function formatDate(dateString) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = new Date(dateString);
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    return pad(day) + " " + month + " " + year;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function toggleDatePicker() {
    var datePicker = document.getElementById("datePicker");
    datePicker.style.display = datePicker.style.display === "block" ? "none" : "block";
}

function applyDateRange() {
    var fromDate = document.getElementById("fromDate").value;
    var toDate = document.getElementById("toDate").value;
    if (fromDate && toDate) {
        var formattedFromDate = formatDate(fromDate);
        var formattedToDate = formatDate(toDate);
        document.getElementById("mainDateInput").value = formattedFromDate + " - " + formattedToDate;
        toggleDatePicker(); // Hide the date picker after applying the dates
    }
}
