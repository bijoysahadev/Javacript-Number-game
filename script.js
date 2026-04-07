let headingone=document.querySelector(".headingone")
let inputone=document.querySelector(".inputone")
let buttonone=document.querySelector(".buttonone")
let errorone=document.querySelector(".errorone")
let count=4
// player two

let headingtwo=document.querySelector(".headingtwo")
let inputtwo=document.querySelector(".inputtwo")
let buttontwo=document.querySelector(".buttontwo")
let errortwo=document.querySelector(".errortwo")
let chance=document.querySelector(".chance")


// player two ends here
buttonone.addEventListener("click" ,function(){
  if(
    !inputone.value
  )
  {
    errorone.innerHTML=("Please enter your Value");
    
  }
  else if (isNaN(inputone.value)){
   errorone.innerHTML=("Please enter a number");
    
  }
  else if (inputone.value>=10 &&  inputone.value>0){
    errorone.innerHTML=("Please Enter a value between 1 to 10");
    
  } 
  else {
    headingone.style.display="none"
    inputone.style.display="none"
    buttonone.style.display="none"
    errorone.style.display="none"

    headingtwo.style.display="block"
    inputtwo.style.display="inline-block"
    buttontwo.style.display="inline-block"
   chance.innerHTML=`Chance: ${count}`
  
  }
})
// button two event listener
buttontwo.addEventListener("click", function() {
    if (!inputtwo.value) {
        errortwo.innerHTML = ("Please enter your Value");
    } 
    else if (isNaN(inputtwo.value)) {
        errortwo.innerHTML = ("Please enter a number");
    } 
    else if (inputtwo.value > 10 || inputtwo.value < 1) { // Fixed range logic
        errortwo.innerHTML = ("Please Enter a value between 1 to 10");
    } 
    else {
        if (count > 1) {
            count--;
            chance.innerHTML = `Chance: ${count}`;
        }

        if (inputone.value === inputtwo.value) {
            errortwo.innerHTML = ("player two winner");
            buttontwo.style.display="none"

        } 
        else {
            count===0
            chance.innerHTML = `Chance: ${count}`;
            console.log("Player one wins");
            buttonone.style.display="none"
        } // This was the missing bracket!

        console.log(inputone.value);
        console.log(inputtwo.value);
    } // Closes the first "else" block
}); // Closes the event listener function