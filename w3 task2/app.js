let counter = 0;
const goButton = document.querySelector('#clickme');
goButton.onclick = writeRandom;
function writeRandom(){
    let num = Math.floor(Math.random() * 100);
    let message;
    if(num > 66){
        message="The random number is in the top third"
    } else if(num>33){
        message = "The random number is in the middle third"
    } else{
        message="The random number is in the bottom third"
    }
    counter++;
    document.querySelector("#theNumber").textContent = num;
    document.querySelector("#writeHere").textContent = message;
    document.querySelector("#count").textContent = counter;
}
let x = 456;
document.getElementById("message1").innerHTML = x.toString() + "<br>" + (456).toString() + "<br>" + (456 + 56).toString();
const players = ["Kobe", "Iverson", "Jordan", "Yao Ming"];
document.getElementById("message2").innerHTML = players.toString();