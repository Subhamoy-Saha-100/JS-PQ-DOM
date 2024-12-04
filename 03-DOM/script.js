// Get references to the input and heading elements
let input = document.getElementById("nameInput");
let heading = document.getElementById("nameDisplay");

input.addEventListener("input",function(){
    let inputValue = input.value;
    let filterHeading = "";
    for(let value of inputValue){
        if((value >= 'a' && value <= 'z') || (value >= 'A' && value <= 'Z') || value == " "){
            filterHeading += value;
        }
    }
    input.value = filterHeading;
    heading.innerText = filterHeading;
});
