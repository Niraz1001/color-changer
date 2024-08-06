let whole = document.querySelector(".whole");
let sky1 = document.querySelector("#sky");
let blue1= document.querySelector("#blue");
let red1 = document.querySelector("#red");
let yellow1 = document.querySelector("#yellow");

blue1.addEventListener("click", ()=>{
    whole.style.backgroundColor = "blue";
});

red1.addEventListener("click", ()=>{
    whole.style.backgroundColor = "red";
});

sky1.addEventListener("click", ()=>{
    whole.style.backgroundColor = "rgb(255, 0, 242)";
});

yellow1.addEventListener("click", ()=>{
    whole.style.backgroundColor = "yellow";
});