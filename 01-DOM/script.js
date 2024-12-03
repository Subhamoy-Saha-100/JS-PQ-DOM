let input = document.createElement("input");
let button = document.createElement("button");

document.querySelector("body").append(input);
document.querySelector("body").append(button);
button.innerText = "Click me";

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let btn = document.querySelector("#btn");
button.style.backgroundColor = "blue";
button.style.color = "white";
btn.classList.add("btnstyle");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";

h1.style.textDecoration = "underline";
h1.style.fontStyle = "italic";
h1.style.color = "purple";
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerText = "Apna college delta practice";

document.querySelector("body").append(p);
p.style.fontWeight = "bold";

