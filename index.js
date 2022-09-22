"use strict";

let form = document.querySelector(".form");
let p = document.querySelector("p");
let input = document.querySelector("#input");
let button = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(form.input.value);
  p.textContent = `Hello ${
    input.value
  }. Today is ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}. Only ${
    6 - new Date(Date.now()).getDay()
  } days to weekend!`;
});
