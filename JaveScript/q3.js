"use strict";


function data(){
    var d = new Date();
    document.getElementById("Time2").innerHTML = d.getFullYear();
    var d1 = new Date();
    document.getElementById("Time").innerHTML = d1.getMonth()+1;
    var d2 = new Date();
    document.getElementById("Time1").innerHTML = d2.getDate();
}
data();

var myArray=[];
function Exam(name,data){
    name.this=name;
    data.this=data;
    myArray.push[this];
}

var sport1 = document.getElementById('input1');
var sport2 = document.getElementById('input2');




var clickme = document.getElementById("submit");
clickme.addEventListener('click',function(){
    var newItem = new Exam(input1.value,input2.value);
    var storge1 = JSON.stringify(clickme);
    localStorage.setItem(`${newItem}`,storge1);
    clickCounter();
});


function outputRender(){
    var output = document.getElementById("output");
    var pEx1=document.createElement("p");
    pEx1.textContent= JSON.parse(clickme);
    output.appendChild(pEx1);
}

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("Favo Sports", `${input}`);
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  }
}
 