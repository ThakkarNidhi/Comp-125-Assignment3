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
(function(){
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    paragraphElements[3] = document.getElementById("paragraphFour");
    
    // define your paragraphs array;
    var paragraphs = [];

    
    //create a reference to the firstname field
    var firstName = document.getElementById("firstName");
    //create a reference to the lastname field
    var lastName = document.getElementById("lastName");
    //create a reference to the email field
    var email = document.getElementById("email");
    //create a reference to the contactNumber field
    var contactNumber = document.getElementById("contactNumber");
    //create a reference to the message field
    var message = document.getElementById("message");

    //create a reference to the form
    var contactForm = document.getElementById("contactForm");

    if (contactForm){
    //event listener with inline anonymous event handler function
    contactForm.addEventListener("submit",function(event){
        event.preventDefault();
        showFormInput();
        contactForm.reset();
    });
    }

    function showFormInput() {
        console.log("------------------------------");
        console.log("First Name: "+firstName.value);
        console.log("------------------------------");
        console.log("Last Name: "+lastName.value);
        console.log("-----------------------------");
        console.log("Email: "+email.value);
        console.log("------------------------------");
        console.log("Contact Number: "+contactNumber.value);
        console.log("-----------------------------");
        console.log("Message: "+message.value);
        console.log("-----------------------------");

    }

    /*assignment 3*/



    var xhrMyData; 
     /** 
      * This function reads data from the paragraphs.json file and aligns them with their  
      * respective ID's with the innerHTML using the if statement  
      *  
      * @method readData 
      * @return void 
      */ 
     function readData() { 
         if ((xhrMyData.readyState === 4) && (xhrMyData.status === 200)) { 
             var MyData = JSON.parse(xhrMyData.responseText); 
             var paragraphs = MyData.paragraphs; 
             paragraphs.forEach(function (paragraph) { 
                 var paragraphElement = document.getElementById(paragraph.id); 
                 //looks for the element id and aligns it with the paragraphs in the html 
                 if(paragraphElement) { 
                      paragraphElement.innerHTML = paragraph.content; 
                 } 
                 
             }, this); 
         } 
     } 
     /* 
     This functions loads data from the paragraph.json file to the html file 
     @method loadData 
     @return void 
     */ 
     function loadData(){ 
         xhrMyData = new XMLHttpRequest(); 
         xhrMyData.open("GET","Scripts/paragraphs.json",true); 
         xhrMyData.send(null); 
         xhrMyData.addEventListener("readystatechange",readData); 
    } 
     function init() {  
      //calls the loadData function  
         loadData(); 
      }; 
      //loads the init function after loading all the html functions  
     window.addEventListener("load",init); 
 })(); 


    /*
    
    // data for my pages
    paragraphs[0] = "Hello I am Nidhi Thakkar.I am studying Software Engeering Technology at Centennial College progress campus.My mission is to  build a network of companies related to software, which will contribute to the development and wide spread usage of the company's software packages..for this mission i have come to canada leaving back my home country ";
    paragraphs[1] = "My hobby is to play volleyball.In my school days i played a lot.I even got a change to play in the inter school competition.However, thesedays i do not get time to play but would continue in future.My favourite volleyball player is Jimmy George. He is the first Indian volleyball player to become a professional and played club volleyball in Italy  ";
    paragraphs[2] = "Secondly i am fond of travelling .Travelling helps me connect with new people, which helps to improve my interpersonal skills.For a year full of work, projects, ratings, traffic, tensions travel is like a fresh dose of much needed oxygen!";
    paragraphs[3]="I am too much fond of doing volunteer service.In my hometown there were too many people who did not even get meal.This was the reason i joined a campaign called change vadodara campaign esspecially to educate children and provide proper food to needy people.I did this work with full love and devotion"
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
        }
    }
    
    
})();
*/