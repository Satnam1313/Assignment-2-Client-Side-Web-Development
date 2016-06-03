/**
 * FileName: app.js
 * 
 * @author Satnam Singh
 * StudentID: 300875942
 * @date June 2, 2016
 * 
 * git hub:
 * website: 
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
    
    // define your paragraphs array;
    var paragraphs = [];
      
    
    // data for my pages
    paragraphs[0] = "I am an international student and I am currently enrolled in the Software Engineering Tech. program at Centennial College. I am a person with a positive attitude, strong determination and good analytical skills. I have good verbal as well as writting skills. I have completed my Secondary Education from India. Through the program I have learned HTML/CSS,Microsoft-Office and Basics of C# language.I have lot of curiosity to learn JavaScript,Linux,System Analysis and Database Management.<br>My hobbies are:<br>1. Workout at gym.<br>2. Learning new things(of It World)<br>3. Love to explore new places.<br>4. Allways curious to know how thhings happerns around the world.";
    +"";
    paragraphs[1] = "<span class='firstSentence'>This is my second paragraph.</span> It is only visible on the second page. Nam commodo sodales porttitor. Proin sed purus ex. Sed id tortor massa. Vestibulum gravida sollicitudin accumsan. Proin ultricies ornare quam in feugiat. In mattis lorem at felis commodo, vel pellentesque ante varius. Cras rutrum efficitur bibendum. In sit amet ante est. Curabitur ullamcorper, enim vel aliquam pretium, quam ex tristique lacus, sed dapibus sapien est quis tellus. Cras rhoncus tempus dui a porta. Quisque est risus, vulputate vel ligula non, elementum bibendum neque. Vestibulum vel tellus porta, laoreet lacus nec, porttitor sapien. Proin ex metus, vehicula vitae nisi non, efficitur ultrices urna.";
    paragraphs[2] = "<span class='firstSentence'>This is my third paragraph.</span> It is only visible on the third page. Vestibulum ac placerat neque. Nulla eu turpis quis purus pulvinar mollis. Aliquam erat volutpat. Vestibulum egestas, felis ac posuere tincidunt, urna tellus condimentum sem, non iaculis enim ante ut orci. Morbi mattis orci diam, vel vulputate nisi tincidunt sed. Nunc vitae commodo est. Morbi eu mauris quam. Nunc odio orci, blandit a eros egestas, volutpat dapibus turpis. Nunc at metus in urna bibendum euismod sit amet et mauris. Nulla tempor nisi vel nisl sodales, in aliquam dui feugiat. Sed ullamcorper nibh cursus, posuere metus sit amet, suscipit urna. Aenean blandit augue sit amet ligula elementum, eget congue sapien tincidunt. In blandit bibendum velit, varius faucibus leo consequat non.";
    
    
    
    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length;
    
    // if paragraph exists then populate each paragraph on the page
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
    
})();