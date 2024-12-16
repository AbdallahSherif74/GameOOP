import { Games } from "./games.js";

new Games("MMORPG");
var X_btn=document.getElementById("X_btn");
console.log(X_btn)

const firstSecElement = document.getElementById("firstSec");
const LastSec= document.getElementById("details");

X_btn.addEventListener("click", function(){
            firstSecElement.classList.remove("d-none");
            LastSec.classList.add("d-none");
})