/*
$(document).ready(function() {
    var max_fields = 10;
    var wrapper1 = $(".entryConditionRow");
    var add_button1 = $(".addEntryRow");
    var wrapper2 = $(".exitConditionRow");
    var add_button2 = $(".addExitRow");


    var x = 2;
    $(add_button1).click(function(e) {
        e.preventDefault();
        $(wrapper1).append('<div class="row" id="inputEntryFormRow"><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><div class="indicator-search"><input type="text" name="entryfirindicator'+x+'" placeholder="Indicator" class="form-control" autocomplete="off" id="entryfirindicator'+x+'" onkeyup="lookup(this);"><ul class="indicatorsuggest-box" id="firindicatorBox'+x+'"></ul></div></div><div class="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12"><input type="text" name="Strategyname" placeholder="Comparator" class="form-control"></div><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="entrysecindicator'+x+'" id="entrysecindicator'+x+'" placeholder="Indicator" class="form-control"></div><div class="col-1"><span class="w-50 h-50 deleteEntryRow" style="font-size:3rem">&times;</span></div></div>');
        x++;
    });


    $(document).on("click", ".deleteEntryRow", function() {
        $(this).closest('#inputEntryFormRow').remove();
    });



    var x = 2;
    $(add_button2).click(function(e) {
        e.preventDefault();
            $(wrapper2).append('<div class="row" id="inputExitFormRow"><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12">'+
                               '<input type="text" name="exitindiactorone" placeholder="Indicator" class="form-control">'+
                               '<ul class="indicatorsuggest-box" id="indicatorBox"></ul>'+
                               '</div><div class="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12">'+
                               '<input type="text" name="exitcomparator" placeholder="Comparator" class="form-control"></div><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12"><input type="text" name="exitindiactortwo" placeholder="Indicator" class="form-control"></div><div class="col-1"><span class="w-50 h-50 deleteExitRow" style="font-size:3rem">&times;</span></div></div>'); //add input box
    });

    $(document).on("click", ".deleteExitRow", function(e) {
        $(this).closest('#inputExitFormRow').remove();
    })




});
*/
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












let indicatorsuggestions = [["MA","Moving Average"],["EMA","Exponential Moving Average"],["DEMA","Double Moving Average"],["MACD","Moving Average Crossover Divergion"]];

var indicatorWrapper = document.querySelector(".indicator-search");
var indicatorInputBox = indicatorWrapper.querySelector("input");
var indicatorSuggBox;

function lookup(arg){
    var id = arg.getAttribute('id');
    var no = id.charAt(id.length-1);
    var value = arg.value;
    console.log(no);
    let userData = value;
    let emptyArray = [];
    let dataArray = [];
    var string = "#indicatorBox"+no.toString();
    console.log(string);
    indicatorSuggBox = indicatorWrapper.querySelector(string);
    // console.log(indicatorSuggBox);
    if(userData){
        emptyArray = indicatorsuggestions.filter((data)=>{
            return data[0].toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        dataArray = emptyArray;
        emptyArray = emptyArray.map((data)=>{
            return data = `<li></li>`;
        });
        indicatorWrapper.classList.add("active");
        showIndicatorSuggestions(emptyArray);
        let allList = indicatorSuggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            let head = document.createElement("p");
            let desc = document.createElement("p");
            head.innerHTML = dataArray[i][0];
            desc.innerHTML = dataArray[i][1]
            head.classList.add("indicatorsuggestionHead");
            desc.classList.add("indicatorsuggestionDesc");
            allList[i].appendChild(head);
            allList[i].appendChild(desc);
            allList[i].setAttribute("name", 'this.innerText');
            allList[i].setAttribute("onclick", "openIndicatorDetails('"+dataArray[i][0]+"',"+no+")");
        }
    }else{
        indicatorWrapper.classList.remove("active");
        dataArray = [];
    }
}


function showIndicatorSuggestions(list){
    let listData;
    if(!list.length){
        userValue = indicatorInputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    indicatorSuggBox.innerHTML = listData;
}

function openIndicatorDetails(element,id){
    $('#indicatorModal').modal();
    let x = document.getElementById('indicatorheadingModal');
    x.innerHTML = element;
    console.log("Id "+id);
    let y = document.getElementById('modalIndicator');
    y.setAttribute("onclick","saveIndicatordetails("+id+");")
}


function saveIndicatordetails(id){

    var x = document.getElementsByName("period1")[0].value;
    var y = document.getElementsByName("period2")[0].value;
    var z = document.getElementById('indicatorheadingModal').innerHTML;
    console.log(id);
    document.getElementsByName("entryfirindicator"+id)[0].value = "("+z+","+x+")";
    document.getElementsByName("entrysecindicator"+id)[0].value = "("+z+","+y+")";
    indicatorWrapper.classList.remove("active");
    $('#indicatorModal').modal('hide');
}


console.log("Here");





function addRow() {
  const div = document.createElement('div');

  div.className = 'row';

  div.innerHTML =  `<div class="row" id="inputExitFormRow"><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12">`+
                               `<input type="text" name="exitindiactorone" placeholder="Indicator" class="form-control">`+
                               `<ul class="indicatorsuggest-box" id="indicatorBox"></ul>`+
                               `</div><div class="col-lg-4 col-xl-3 col-md-12 col-sm-12 col-xs-12">`+
                               `<input type="text" name="exitcomparator" placeholder="Comparator" class="form-control">`+
                               `</div><div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12">`+
                               `<input type="text" name="exitindiactortwo" placeholder="Indicator" class="form-control"></div>`+
                                `<div class="col-1">`+
                               `<span class="w-50 h-50 deleteExitRow" style="font-size:3rem" onclick="removeRow(this)">&times;</span>`+
                               `</div>`+
                               `</div>`


  document.getElementById('entryConditionRow').appendChild(div);
}


function removeRow(input) {
    console.log(input)
    input.parentNode.parentNode.remove()
}
