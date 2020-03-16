"use strict";
var arrayOfNumbers=[];
function greaterThan(arrayOfNumbers,x){
    var counter=0;
    for(var i=0;i<arrayOfNumbers.length;i++){
        if(arrayOfNumbers[i]>x){
            counter= counter+1;
        }
    }
    console.log(counter);
    return counter;
} 
greaterThan([5,3,6,7,1,2,6],5);

