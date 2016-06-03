/**
 * FileName: app.js
 * 
 * @author Satnam Singh
 * StudentID: 300875942
 * @date June 2, 2016
 * 
 * git hub:https://github.com/Satnam1313/Assignment-2-Client-Side-Web-Development
 * website: http://assignment-2-mini-protfolio.azurewebsites.net/
 * @description: This file icontaing the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
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
      
    
    // data for my pages
    paragraphs[0] = "I am an international student and I am currently enrolled in the Software Engineering Tech. program at Centennial College. I am a person with a positive attitude, strong determination and good analytical skills. I have good verbal as well as writting skills. I have completed my Secondary Education from India. Through the program I have learned HTML/CSS,Microsoft-Office and Basics of C# language.I have lot of curiosity to learn JavaScript,Linux,System Analysis and Database Management.<br>My hobbies are:<br>1. Workout at gym.<br>2. Learning new things(of It World)<br>3. Love to explore new places.<br>4. Allways curious to know how thhings happerns around the world.";
    
    paragraphs[1] = "OR Gate project was first project of my life.In the beginning,I thought that it is immpossible for me to complete beacuse every time I  was changing something to enhance it's functionality everthing was messed up.I was to ready to give up but one of my senior helped me a lot"+
    "He helped me in all the ways he could and with his assistance I completed my project on time." + "Overall, I enjoyed a lot while doing this project.<br> ";
    
    paragraphs[2]="Game project was a assignment of my elder brother. He was alone in this project and it was summer vacations so I decided to help him. "+"This project was totally different for me as I have no knowledge regarding that(like its functionality, how it works etc)"+"my main work was to ask him lots of question on that project and provide him company. While working in this project i understood that learning is continous process, and it could be gain from the small things.";
    
    paragraphs[3]="At first,this project seem to be very boring one. Nobody was interested in doing it and everyone gave up. As this project was the competiotn between the schools at province level so our arts teacher motivated all students but only few agreed on it. "+"Everyone was putting their all efforts to give their best. From the beginning till completion of project everyone enjoyed. During the exhibition, our group preformed very well and we won second prize.   ";
    
    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length;
    
    // if paragraph exists then populate each paragraph on the page
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
    
})();