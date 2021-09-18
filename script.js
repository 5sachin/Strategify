
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
            $(wrapper1).append('<div class="row" id="inputEntryFormRow"><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Comparator" class="form-control"></div><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-1"><span><a href="#" class="w-50 h-50 deleteEntryRow" style="font-size:3rem">&times;</a></span></div></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });



    $(document).on("click", ".deleteEntryRow", function() {
        $(this).closest('#inputEntryFormRow').remove();
        x--;
    });







    var x = 1;
    $(add_button2).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper2).append('<div class="row" id="inputExitFormRow"><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Comparator" class="form-control"></div><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-1"><span><a href="#" class="w-50 h-50 deleteExitRow" style="font-size:3rem">&times;</a></span></div></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(document).on("click", ".deleteExitRow", function(e) {
        $(this).closest('#inputExitFormRow').remove();
        x--;
    })




});

function openNav() {
  document.getElementById("mySidenav").style.display = "inline-block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}


var arr = ["john", "bob", "kayla", "sam", "elena", "josh", "andrew", "maria"];
var selectValues = {
  "1": "SBIN",
  "2": "Reliance",
  "3": "Titan",
  "4": "TCS",
  "5": "Adani",
  "6": "Dr Reddy",
  "7": "Titan",
  "8": "TCS",
  "9": "Adani",
  "10": "Dr Reddy"
};
var $mySelect = $('#scripName');
//
$.each(selectValues, function(key, value) {
  var $option = $("<option/>", {
    value: key,
    text: value
  });
  $mySelect.append($option);
});