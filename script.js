// //your JS code here. If required.
// let form = document.querySelector("form");
// form.addListener("submit",()=>{
// 	event.preventDefault();
// let text = document.getElementById("text");
// let delay = document.getElementById("delay");
// let output = document.getElementById("output");
// setTimeout(()=>{
// 	output.textContent=text.value;
// },delay.value);
	
// })
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  let text = document.getElementById("text");
  let delay = document.getElementById("delay");
  let output = document.getElementById("output");

  setTimeout(() => {
    output.textContent = text.value;
  }, parseInt(delay.value));
});


