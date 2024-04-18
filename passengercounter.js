//document.getElementById("count-ele").innerText = 5;
//camelCase
//Document Object Model(DOM)-how you use javascript to interact with HTML
//string > number
let welcomeEl=document.getElementById("welcome-el")
let naav="Shounak"
let emoji="👋"
let greeting="Welcome back, "
let message=greeting+naav+emoji
welcomeEl.innerText= message
let countEL=document.getElementById("count-el")
let saveEL=document.getElementById("save-ele")
let count=0
function increment(){
  count++
  countEL.innerText=count
} 
function save(){
    let countStr=count+" - "
    saveEL.textContent+=countStr
    countEL.innerText=0
    count=0
}

//  let points=4
//  let bonusPoints="10"
//  let totalPoints=points+bonusPoints 
//  console.log(totalPoints)
 


