let buttons = document.querySelectorAll("button");

let sayHello = function(){
    alert("hello");
}
let colorChange = function(){
    this.style.backgroundColor = "red";
}
for(let btn of buttons){
    btn.onclick = sayHello;
    // btn.addEventListener("click",function(){
    //     console.log(this);
    //     this.style.backgroundColor = "red";
    // })
    btn.addEventListener("click",colorChange);
}