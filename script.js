const decrease=document.querySelector(".decrease");
const increase=document.querySelector(".increase");
const reset=document.querySelector(".reset");

const displayNumber=document.querySelector(".display-number");

let counter=0;


increase.addEventListener("click",function(){
  counter+=1;
  displayNumber.textContent=counter;
})

reset.addEventListener("click",function(){
  counter=0;
  displayNumber.textContent=counter;
})

decrease.addEventListener("click",function(){
  if(counter>0){
  counter-=1;
  displayNumber.textContent=counter;
  }
  else
  {
    displayNumber.disabled=true;
  }
})