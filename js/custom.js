document.getElementById("btnSH").addEventListener("click", SunsetHills());
document.getElementById("btnClear").addEventListener("click", Clear());

function SunsetHills(){
//Step1: get user data
let num1 = parseInt(document.getElementById("userInput1").value);
let num2 = parseInt(document.getElementById("userInput2").value);
let num3 = parseInt(document.getElementById("userInput3").value);
let num4 = parseInt(document.getElementById("userInput4").value);
let num5 = parseInt(document.getElementById("userInput5").value);
}

//Step2: Convert user data into an array
let userArray = newArray();
userArray.push(num1);
userArray.push(num2);
userArray.push(num3);
userArray.push(num4);
userArray.push(num5);

//step3: need to determine which buildings are able to see the sunset
let maxNum = userArray(0);
let ascendingArray = new Array();
ascendingArray.push(maxNum);

//step 4: need to find the maxNum and also store the ascending order of all the buildings that can see the sunset
for(let loop=1; loop < userArray.length; loop++){
    if(userArray[loop] > maxNum) {
        maxNum = userArray[loop]
        ascendingArray.push(maxNum);
    }
}

//step5: output results to the user
document.getElementById("output").innerText = `The ascendingArray is [${ascendingArray.join(', ')}]`

function clear() {
    document.getElementById("userInput1").value = "";
    document.getElementById("userInput1").value = "";
    document.getElementById("userInput2").value = "";
    document.getElementById("userInput3").value = "";
    document.getElementById("userInput4").value = "";
    document.getElementById("userInput5").value = "";
    document.getElementById("output").innerText = "";
}