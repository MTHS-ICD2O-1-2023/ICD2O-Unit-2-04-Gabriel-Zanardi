// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Mar 2024
// This file contains the JS functions for index.html
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const userStreetNumber = parseInt(document.getElementById("street-number").value)

  // output
  document.getElementById("answer").innerHTML =
    "Your info is: " + userStreetNumber + " " + streetName + "."
}
