console.log("Checking is the JavaScript file loaded!");


let count = document.querySelector("#number");
count.style.color = "red";

let increase = document.querySelector("#increase");
let reset= document.querySelector("#reset");

increase.addEventListener("click", function () {
    let currentValue = parseInt(count.innerText);
    let newValue = currentValue + 1;
    count.innerText = newValue;
  });

 reset.addEventListener("click",function(){
    count.innerText = 0;
 })

 let decrease = document.querySelector("#decrease")
 decrease.addEventListener('click',function(){
   let currentValue= parseInt(count.innerText);
   let newValue= currentValue-1;
   if(newValue<0){
      newValue=0;
   }
   count.innerText=newValue;
 })