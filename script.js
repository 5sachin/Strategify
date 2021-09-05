
$(document).ready(function() {
    var max_fields = 10;
    var wrapper1 = $(".IndicatorEntry");
    var add_button1 = $(".addIndicator");
    var wrapper2 = $(".IndicatorEntry2");
    var add_button2 = $(".addIndicator2");


    var x = 1;
    $(add_button1).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper1).append('<div><input class="font-weight-bold form-control" placeholder="Indicator Price" type="text" name="conditionEntry2"/><a href="#" class="delete">Delete</a></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper1).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })

    var x = 1;
    $(add_button2).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper2).append('<div><input class="font-weight-bold form-control" placeholder="Indicator Price" type="text" name="conditionEntry2"/><a href="#" class="delete">Delete</a></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper2).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })




});

function openNav() {
    console.log("ENter");
    document.getElementById("drawer").style.display = "block";
    document.getElementById("drawer").style.width = "250px";
}

function closeNav() {
    console.log("ENter");
  document.getElementById("drawer").style.width = "0";
}