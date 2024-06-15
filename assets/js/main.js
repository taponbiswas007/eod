$(document).ready(function () {
    $(".togglebar").click(function () {
        $(".bars ,.close").toggle();
    });
    $(".bars").click(function () {
        $(".right nav").animate({
            "left": "0"
        }, 500);
    });
    $(".close").click(function () {
        $(".right nav").animate({
            "left": "-200%"
        }, 500);
    });
    $(".item").click(function () {
        $(this).find(".checkmark").toggle();
        setTimeout(function () {
            window.location.href = 'rental-item-search-results.html';
        }, 1000);
    });
    $(".buybtn").click(function () {

        window.location.href = 'bill-page.html';

    });
    $(".filter-item-checkbox").click(function () {
        $(this).find(".checked").toggle();
    });
    $(".filterbtn").click(function () {
        $(".filter-popup").slideToggle();
    });
    $(".select-category-button").click(function () {
        $(".category-select-item").slideToggle();
    });
    $(".getqtnbtn").click(function () {
        $(".overly").fadeIn();
        $("#loginArea").fadeIn();
    });
    $("#registerbtn").click(function () {

        $("#registerArea").fadeIn();
        $("#loginArea").fadeOut();
    });
    $("#signinnow").click(function () {

        $("#registerArea").fadeOut();
        $("#loginArea").fadeIn();
    });
    $(".overly").click(function () {

        $("#registerArea").fadeOut();
        $("#loginArea").fadeOut();
        $(this).fadeOut();
    });
    // Show the select-item-area when the input field is focused
    $('.salespersonname-area input').focus(function () {
        $('.select-item-area').show();
    });

    // Hide the select-item-area when clicking outside
    $(document).click(function (event) {
        if (!$(event.target).closest('.salespersonname-area').length) {
            $('.select-item-area').hide();
        }
    });

    // Set the clicked li value to the input field and hide the select-item-area
    $('.select-item-area li').click(function () {
        var selectedValue = $(this).text();
        $('.salespersonname-area input').val(selectedValue);
        $('.select-item-area').hide();
    });

    // Toggle the select-item-area when clicking the angle down icon
    $('.anglearrow').click(function () {
        $('.select-item-area').toggle();
    });

    var maxCount = 12;

    // Increase button click event
    $('.counter .increase').click(function () {
        var $counter = $(this).closest('.counter');
        var $countElement = $counter.find('.count');
        var count = parseInt($countElement.text());
        if (count < maxCount) {
            $countElement.text(count + 1);
        }
    });

    // Decrease button click event
    $('.counter .decrease').click(function () {
        var $counter = $(this).closest('.counter');
        var $countElement = $counter.find('.count');
        var count = parseInt($countElement.text());
        if (count > 0) { // Optional: prevent negative counts
            $countElement.text(count - 1);
        }
    });
    var maxCountminute = 60;

    // Increase button click event
    $('.counter2 .increase2').click(function () {
        var $counter = $(this).closest('.counter2');
        var $countElement = $counter.find('.count2');
        var count = parseInt($countElement.text());
        if (count < maxCountminute) {
            $countElement.text(count + 1);
        }
    });

    // Decrease button click event
    $('.counter2 .decrease2').click(function () {
        var $counter = $(this).closest('.counter2');
        var $countElement = $counter.find('.count2');
        var count = parseInt($countElement.text());
        if (count > 0) { // Optional: prevent negative counts
            $countElement.text(count - 1);
        }
    });

    $('.time-toggle').click(function () {
        var currentText = $(this).text();
        $(this).text(currentText === 'am' ? 'pm' : 'am');
    });


    $(".category-items").click(function () {
        $(this).find(".checkthisitem").toggle();
        var categoryName = $(this).find(".category-name");
        if (categoryName.css("color") === "rgb(59, 35, 109)") {
            categoryName.css("color", "#424242");
        } else {
            categoryName.css("color", "#3B236D");
        }
    });


    // Toggle .select-item-name visibility on .bill-item-name click
    $('.bill-item-name').on('click', function () {
        $(this).find('.select-item-name').toggle();
    });

    // Update h1 text and hide .select-item-name on li click
    $('.select-item-name li').on('click', function () {
        var newItem = $(this).text().trim(); // Get the text of the clicked li
        $(this).closest('.bill-item-name').find('h1').text(newItem); // Update h1 text
        $(this)('.select-item-name').hide(); // Hide the .select-item-name container
    });


    //check out page area
    $('.mathod-item').click(function() {
        var $this = $(this);
        var $icon = $this.find('.arrowrighticon');
        var $paymentArea = $this.find('.bypayment-area');
        
        // Toggle the payment area
        $paymentArea.toggle();
        
        // Toggle the rotation of the icon
        if ($icon.hasClass('rotated')) {
            $icon.removeClass('rotated').css('transform', 'rotate(0deg)');
        } else {
            $icon.addClass('rotated').css('transform', 'rotate(90deg)');
        }
    });

    $('.bypayment-area li').click(function(event) {
        event.stopPropagation(); // Prevent triggering the parent div's click event
        var $liValue = $(this).text();
        $(this).closest('.mathod-item').find('h2').text($liValue);
        $(".bypayment-area").hide(); // Optionally hide the list after selection
        $(this).closest('.mathod-item').find('.arrowrighticon').removeClass('rotated').css('transform', 'rotate(0deg)');
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