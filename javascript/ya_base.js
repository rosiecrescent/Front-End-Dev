/*
  Javascript File Purpose: 
  1. Bring back to top of webpage Function
  2. Copy Phone No. to Clipboard Function in Footer
  >> For: All Pages

  Name: Yadanar Aung
  Admin No: P2214621
  Class: DAAA/FT/1A/02

  Filename: ya_base.js

  Last Updated Date: 7 August 2022

  Function List:
  1. OnLoad(): makes return to top button invisible upon load 
  2. ReturnUp(): makes return to top button visible upon scroll
  3. copyPhoneNumber(): to copy phone number text to clipboard upon a click
*/

"use strict";

//-----------------------------------------------------------------------------------------------------------
//1. Bring back to top of webpage Function
// When window is scrolled, run ReturnUp function
window.onscroll = function () {
    ReturnUp();
};

// OnLoad Function
function OnLoad() {
    document.getElementById("return").style.visibility = "collapse"; // Hides Return Element
    document.getElementById("return").style.opacity = "0"; // Make Return Element hidden using opacity
};

// When Return Element is clicked
function ReturnUp() {
    // winScroll = number of pixels an element's content is scrolled vertically
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // height = minimum height the element(including padding)would require in order to fit all the content in the viewport without using a vertical scrollbar
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Check how far user has scrolled down
    var scrolled = (winScroll / height) * 100;
    // if scrolled down then show Return element
    if (scrolled > 1) {
        document.getElementById("return").style.visibility = "visible";
        document.getElementById("return").style.opacity = "1";
    } 
    
    // else hide Return element
    else {
        document.getElementById("return").style.visibility = "collapse";
        document.getElementById("return").style.opacity = "0";
    }
};

//-----------------------------------------------------------------------------------------------------------
//2. Function to Copy Phone Number In Footer
function copyPhoneNumber() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("92964443").then(() => {
        alert("Copied Yadanar Aung's Phone Number(+65) to clipboard :)");
    });
};