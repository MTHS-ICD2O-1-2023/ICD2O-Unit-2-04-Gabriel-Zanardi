// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/** */

function enterClicked() {
  // input
  const lengthOfTriangle = document.getElementById("length-of-triangle").value
  const widthOfTriangle = document.getElementById("width-of-triangle").value

  //process
  const answerStepOne = (lengthOfTriangle * widthOfTriangle)
  const answerStepTwo = (answerStepOne / 2)

  // output
  document.getElementById("answer").innerHTML =
    "Area of this triangle is: " + answerStepTwo + 
}
