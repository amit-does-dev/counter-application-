console.log("Checking is the JavaScript file loaded!");


// let lcValue = localStorage.getItem("count")

// let count = document.querySelector("#number");
// count.style.color = "red";

// let increase = document.querySelector("#increase");
// let reset= document.querySelector("#reset");

// increase.addEventListener("click", function () {
//     let currentValue = parseInt(count.innerText);
//     let newValue = currentValue + 1;
//     count.innerText = newValue;
//   });

//  reset.addEventListener("click",function(){
//     count.innerText = 0;
//  })

//  let decrease = document.querySelector("#decrease")
//  decrease.addEventListener('click',function(){
//    let currentValue= parseInt(count.innerText);
//    let newValue= currentValue-1;
//    if(newValue<0){
//       newValue=0;
//    }
//    count.innerText=newValue;
//  })

let count = document.querySelector("#number");
// Retrieve the last saved count value from local storage, or use 0 as the default value
let savedCount = localStorage.getItem("count") || 0;
// Update the count element with the saved count value
count.innerText = savedCount;

// Set the initial color of the count element to red
count.style.color = "red";

let increase = document.querySelector("#increase");
let reset = document.querySelector("#reset");
let decrease = document.querySelector("#decrease");

increase.addEventListener("click", function () {
  let currentValue = parseInt(count.innerText);
  let newValue = currentValue + 1;
  count.innerText = newValue;
  // Save the new count value to local storage
  localStorage.setItem("count", newValue);
});

reset.addEventListener("click", function () {
  count.innerText = 0;
  // Save the reset count value to local storage
  localStorage.setItem("count", 0);
});

decrease.addEventListener("click", function () {
  let currentValue = parseInt(count.innerText);
  let newValue = currentValue - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  count.innerText = newValue;
  // Save the new count value to local storage
  localStorage.setItem("count", newValue);
});