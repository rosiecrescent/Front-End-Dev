/*
  Purpose: 
  1. Typing Effect
  2. Collapsible Sections
  >> For: Career Prospects Page
  
  Name: Yadanar Aung
  Admin No: P2214621
  Class: DAAA/FT/1A/02

  Filename: ya_careerProspects.js

  Last Updated Date: 7 August 2022

  Function List:
  1. typingEffect(): typer effect for title
*/

"use strict"; 

//-----------------------------------------------------------------------------------------------------------
//1. Typing Effect
var j = 0;
var txt = 'Career Prospects';
var speed = 150;

typingEffect();

function typingEffect() {
    if (j < txt.length) {
        document.getElementById("typingEffect").innerHTML += txt.charAt(j);
        j++;
        setTimeout(typingEffect, speed);
    };
};

//-----------------------------------------------------------------------------------------------------------
//2. Show More/Less Function
var collapsible = document.getElementsByClassName("collapsible");
var i;

//for loop
for (i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function() { //waiting to get clicked to get triggered
    this.classList.toggle("active"); //adds class toggle to collapsible element
    var content = this.nextElementSibling;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } 
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  })
};