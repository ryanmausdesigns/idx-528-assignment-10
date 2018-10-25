let box = document.getElementById("box-1"); 

const boxOnClick = (event) => {
    let element = event.target; 
    let color = element.style.backgroundColor; 

    if (color == "") {
        element.style.backgroundColor = "red";
    };
}; 

box.addEventListener("click", boxOnClick); 

let box2 = document.getElementById("box-2"); 

const boxOnDblClick = (event) => {
    let element = event.target; 
    let color = element.style.backgroundColor; 

    if (color == "" || color == "green") {
        element.style.backgroundColor = "blue";
    } else if (color == "blue") {
        element.style.backgroundColor = "green";
    };
}; 

box2.addEventListener("dblclick", boxOnDblClick); 

let box3 = document.getElementById("box-3"); 

const boxOnMouseDown = (event) => {
    let element = event.target; 
    let color = element.style.backgroundColor; 

    if (color == "" || color == "pink") {
        element.style.backgroundColor = "orange";
    };
}; 

box3.addEventListener("mousedown", boxOnMouseDown); 

const boxOnMouseUp = (event) => {
    let element = event.target; 
    let color = element.style.backgroundColor; 

    if (color == "orange") {
        element.style.backgroundColor = "pink";
    }; 
}; 

box3.addEventListener("mouseup", boxOnMouseUp);

let box4 = document.getElementById("box-4"); 
let box5 = document.getElementById("box-5"); 
let box6 = document.getElementById("box-6"); 

const boxOnMouseEnter = (event) => {
    let element = event.target; 
    let color = element.style.backgroundColor; 

    if (color == "" || color == "teal") {
        element.style.backgroundColor = "cyan";
    };   
}; 

box4.addEventListener("mouseenter", boxOnMouseEnter);
box5.addEventListener("mouseenter", boxOnMouseEnter);
box6.addEventListener("mouseenter", boxOnMouseEnter);

const boxOnMouseLeave = (event) => {
    let element = event.target; 
    let color = element.style.backgroundColor; 

    if (color == "cyan") {
        element.style.backgroundColor = "teal";
    };  
}; 

box4.addEventListener("mouseleave", boxOnMouseLeave);
box5.addEventListener("mouseleave", boxOnMouseLeave);
box6.addEventListener("mouseleave", boxOnMouseLeave);

let box7 = document.getElementById("box-7"); 
let box8 = document.getElementById("box-8"); 
let box9 = document.getElementById("box-9"); 

const boxOnMouseMove = (event) => {
    let element = event.target; 
    let color = element.style.backgroundColor; 

    if (color == "" || color == "gold") {
        element.style.backgroundColor = "fuchsia";
    } else if (color == "fuchsia") {
        element.style.backgroundColor = "gold";
    }  
};

box7.addEventListener("mousemove", boxOnMouseMove);
box8.addEventListener("mousemove", boxOnMouseMove);
box9.addEventListener("mousemove", boxOnMouseMove);
