
$(document).ready(function() {
    var max_fields = 10;
    var wrapper1 = $(".entryConditionRow");
    var add_button1 = $(".addEntryRow");
    var wrapper2 = $(".exitConditionRow");
    var add_button2 = $(".addExitRow");


    var x = 1;
    $(add_button1).click(function(e) {
        e.preventDefault();
        $(wrapper1).append('<div class="row" id="inputEntryFormRow"><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Comparator" class="form-control"></div><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-1"><span class="w-50 h-50 deleteEntryRow" style="font-size:3rem">&times;</span></div></div>');
    });


    $(document).on("click", ".deleteEntryRow", function() {
        $(this).closest('#inputEntryFormRow').remove();
    });



    var x = 1;
    $(add_button2).click(function(e) {
        e.preventDefault();
            $(wrapper2).append('<div class="row" id="inputExitFormRow"><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Comparator" class="form-control"></div><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Indicator" class="form-control"></div><div class="col-1"><span class="w-50 h-50 deleteExitRow" style="font-size:3rem">&times;</span></div></div>'); //add input box
    });

    $(document).on("click", ".deleteExitRow", function(e) {
        $(this).closest('#inputExitFormRow').remove();
    })




});

function openNav() {
  document.getElementById("mySidenav").style.display = "inline-block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}




let suggestions = ["Relicane","SBIN","TCS","LTI","Tata Motors","Aditya Birla Capital Ltd","Ajanta Pharma Ltd","ACC Ltd","Adani Total Gas Ltd","Adani Green Energy Ltd","Adani Transmission Ltd","MRF","HDFC","Yes Bank","Adani","Titan","Bharti Airtel","Tata Steel","Infosys"];

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;


inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");

        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("name", "this.innerText");
            allList[i].setAttribute("onclick", "addScripName(this.innerText)");
        }
    }else{
        searchWrapper.classList.remove("active");
    }
}

var scripAddedContainer = document.querySelector(".addedscripList");
function addScripName(element){

    var scripAddedName = document.createElement("a");
    scripAddedName.setAttribute("class","btn");
    scripAddedName.setAttribute("id",element);
    scripAddedName.innerHTML = element;
    inputBox.value ="";

    var span = document.createElement('span');
    span.setAttribute("class","removeAddedScripName");
    span.setAttribute("onclick","cancel('" + element + "')");
    span.innerHTML = '&times';

    scripAddedName.append(span);
    scripAddedContainer.append(scripAddedName);

    searchWrapper.classList.remove("active");
}



function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


function cancel(val){
    var parent = document.getElementById("autocom-box");
    var child = document.getElementById(val);
    console.log(parent);
    console.log(child);
    child.remove(parent);
}

