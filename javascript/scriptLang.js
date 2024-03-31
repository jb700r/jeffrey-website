"use strict"

let btnFrench = document.getElementById("btnFrench")
btnFrench.addEventListener("click",GotoFrench);
 let btnEnglish = document.getElementById("btnEnglish")
btnEnglish.addEventListener("click",GotoEnglish);

function GotoFrench(){
    window.location.href = "FR/home.php";
}

function GotoEnglish(){
    window.location.href = "EN/home.php";
}