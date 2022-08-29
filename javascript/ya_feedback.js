/*
  Purpose: 
  1. Typing Effect on Title
  2. Alert Message upon Successful Form submission & Resets Page
  >> For: Feedback Page
  
  Name: Yadanar Aung
  Admin No: P2214621
  Class: DAAA/FT/1A/02

  Filename: ya_feedback.js

  Last Updated Date: 7 August 2022

  Function List:
  1. typingEffect(): typer effect for title
*/

"use strict";

//-----------------------------------------------------------------------------------------------------------
//1. Typing Effect
var i = 0;
var txt = 'Feedback Form';
var speed = 150;

typingEffect();

function typingEffect() {
  if (i < txt.length) {
    document.getElementById("typingEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typingEffect, speed);
  }
};

//-----------------------------------------------------------------------------------------------------------
//2. Alert message when form submitted successfully
var todayDate = new Date(); //get Today's Date
var todayDay = todayDate.getDay(); //get the Today's Day Number, Monday is 1 & Sunday is 0
var alertMessage = "Thank You for your Feedback!\nHave a good ";

//Object me to store properties abt my name
var me = {
  //properties
  firstName: "Yadanar",
  lastName: "Aung",
  adminNumber: "p2214521",

  //method
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

//Array of days
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alertMessage += days[todayDay] + ' ♡'; //get day from array using todayDay(index)

var myFullName = me.fullName(); //method to get my full name
alertMessage += '\n' + ' - ' + myFullName;

//loads on window
window.onload = function () {
  document.forms[0].onsubmit = function () {
    if (this.checkValidity()) alert(alertMessage);
    //refreshs page upon successful submission
    window.location.href = "../HTML/ya_feedback.html"
    return false;
  };
};