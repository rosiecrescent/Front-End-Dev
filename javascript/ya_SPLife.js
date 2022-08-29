/*
  Purpose: 
  1. Typing Effect on Title
  2. Enable Tooltips
  3. Countdown to Graduation Date
  >> For: SP Life Page
  
  Name: Yadanar Aung
  Admin No: P2214621
  Class: DAAA/FT/1A/02
  
  Filename: ya_SPLife.js

  Last Updated Date: 7 August 2022

  Function List:
  1. typingEffect(): typer effect for title
  2. updateCountdowntime(): countdown to 1 March 2025
*/

"use strict";

//-----------------------------------------------------------------------------------------------------------
//1. Typing Effect on Title
var i = 0;
var txt = 'The SPerience';
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
//2. Enable tooltips
//source: https://getbootstrap.com/docs/5.0/components/tooltips/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//-----------------------------------------------------------------------------------------------------------
//3. Countdown Timer to Graduation
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const graduationDay = new Date('March 1 2025 00:00:00');

//Function to get count down
function updateCountdowntime() {
  const currentTime = new Date(); //get today's date
  const diff = graduationDay - currentTime; //get dat difference

  //How time works
  const textDays = Math.floor(diff / 1000 / 60 / 60 / 24);
  const textHours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const textMinutes = Math.floor(diff / 1000 / 60) % 60;
  const textSeconds = Math.floor(diff / 1000) % 60;

  days.innerHTML = textDays;
  hours.innerHTML = textHours < 10 ? '0' + textHours : textHours;
  minutes.innerHTML = textMinutes < 10 ? '0' + textMinutes : textMinutes;
  seconds.innerHTML = textSeconds < 10 ? '0' + textSeconds : textSeconds;
}

//sets an interval of 1 second between countdown's updatess
setInterval(updateCountdowntime, 1000)