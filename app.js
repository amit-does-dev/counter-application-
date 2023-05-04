console.log("JavaScript file loaded!");

// if(click === "add")
// {
//     count = count+1;
// }
// else{
//     count = 0;
// }

let count = document.querySelector("#number");
count.style.color = "red";
let increase = document.querySelector("#increase");
let reset= document.querySelector("#reset");

increase.addEventListener("click", function () {
    let currentValue = parseInt(count.innerText);
    let newValue = currentValue + 1;
    count.innerText = newValue;
  });
