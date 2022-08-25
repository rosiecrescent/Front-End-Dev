/*
  Purpose: 
  1. Typing Effect on Title
  >> For: Home Page
  
  Name: Yadanar Aung
  Admin No: P2214621
  Class: DAAA/FT/1A/02

  Filename: ya_homePage.js

  Last Updated Date: 7 August 2022

  Function List:
  1. typingEffect(): typer effect for title
*/

"use strict";

//-----------------------------------------------------------------------------------------------------------
//1. Typing Effect on Title
var i = 0;
var txt = 'About Me ･ᴗ･';
var speed = 200;

typingEffect();

function typingEffect() {
    if (i < txt.length) {
        document.getElementById("typingEffect").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typingEffect, speed);
    }
};