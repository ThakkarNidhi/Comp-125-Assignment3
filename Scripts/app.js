/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
/**
*filename: app.js
*
@author Nidhi Thakkar
@date 10/06/2016
*
*student id:300872151
*website  :http://assignment2comp125.azurewebsites.net/
@description This is the main java script file for the website.
*/
 
 (function () { 
     "use strict"; 
 
 
     var xhrParagraphs; 

 
 //This is for reading the data and append data to ID.  
 
 
     function readData() { 
         // data loaded                everything is ok 
         if ((xhrParagraphs.readyState === 4) && (xhrParagraphs.status === 200)) { 

 
           var text = JSON.parse(xhrParagraphs.responseText); 
             var paragraphs = text.paragraphs; 

paragraphs.forEach(function (paragraph){
    var paragraphElement=document.getElementById(paragraph.id);
             if(paragraphElement) {
                 paragraphElement.innerHTML=paragraph.paragraph;
             }
             },this); 

 
        } 
     } 
    function readParagraphs() { 
         xhrParagraphs = new XMLHttpRequest(); // step 1 - create xhr object 
         xhrParagraphs.open("GET", "Scripts/paragraphs.json", true); // step 2 - open request 
         xhrParagraphs.send(null); // step 3 - send request 
        xhrParagraphs.addEventListener("readystatechange", readData); // step 4 
     } 
     
    

 
 
     // app entry function 
    function init() { 
        readParagraphs(); 
    } 

 
     // call init funciton when window finishes loading 
    window.addEventListener("load", init); 
    
 })(); 
