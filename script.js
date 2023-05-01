var input = document.getElementById("input-text");
// var button =document.getElementsByClassName("btn");

const row1Buttons = document.getElementById('row-1');
const row2Buttons = document.getElementById('row-2');
const row3Buttons = document.getElementById('row-3');
const row4Buttons = document.getElementById('row-4')

row1Buttons, row2Buttons, row3Buttons, row4Buttons.addEventListener('click', (event) => {
  const isButton = event.target.value;
  input.value = event.target.value;
  if (isButton ===1) {
    input.value = input.value+1;
    input.value = input.value+1;
 
  } else if (isButton ===1) {
    input.value = input.value+2;
  }
  else if (isButton ===3) {
    input.value = input.value+3;
  }
})







// button.addEventListener("click", myFunction);


// function myFunction() {
//     if (button.value === "7") {
//         input.value = input.value + 7;
//     } else {
//         alert("Try again!");
//     }}

//     // const wrapper = document.getElementsById('seven');
//     const wrapper1 = document.getElementById('eight');

// wrapper1.addEventListener('click' , function(){
//     if(!)
//     }
// });


// function myFunction() {
//     if (wrapper.value === "7") {
//         input.value = input.value + 7;
//         if (wrapper1.value === "8") {
//             input.value = input.value + 8;
//         } else {
//             alert("Try again!");
//         }}}

// const button = document.getElementsByTagName("button");

// button.addEventListener("click", myFunction);

// function myFunction() {
//     if (button[0, 2, 3, 4, 5, 6].value === button.value) {
//         input.value = input.value ++;
//     } else {
//         alert("Try again!");
//     }}
