document.getElementById("btn").addEventListener("click", printText);

async function printText(){
	
	const textInput = document.getElementById("text").value;
	const delayInput = document.getElementById("delay").value;

	const delayMilliseconds = delayInput * 1000;

	await new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},delayMilliseconds)
	});

	document.getElementById("output").innerText = textInput;

}