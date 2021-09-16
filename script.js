
$(document).ready(function() {
    var max_fields = 10;
    var wrapper1 = $(".entryConditionRow");
    var add_button1 = $(".addEntryRow");
    var wrapper2 = $(".exitConditionRow");
    var add_button2 = $(".addExitRow");


    var x = 1;
    $(add_button1).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper1).append('<div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Comparator" class="form-control"></div><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-1"><span><a href="#" class="w-50 h-50" style="font-size:3rem">&times;</a></span></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper1).on("click", ".deleteEntryRow", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })

    var x = 1;
    $(add_button2).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper2).append('<div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Comparator" class="form-control"></div><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-1"><span><a href="#" class="w-50 h-50" style="font-size:3rem">&times;</a></span></div>'); //add input box
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
  document.getElementById("mySidenav").style.display = "inline-block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}