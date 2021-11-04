var toCount="";


function output(digit) {
document.getElementById("printoutput").value += digit;
toCount += digit;
}

function isEqual() {
document.getElementById("printoutputanswer").value = eval(toCount);
}

function clearScreen() {
document.getElementById("printoutput").value = "";
toCount = "";
}

function clearScreenLast() {
document.getElementById('printoutput').value=document.getElementById('printoutput').value.slice(0, -1);
toCount=toCount.slice(0, -1);
}

function answer() {
document.getElementById('printoutput').value+=document.getElementById('printoutputanswer').value;
toCount += document.getElementById('printoutputanswer').value;
}

function round() {
document.getElementById('printoutputanswer').value=Math.round(eval(document.getElementById('printoutputanswer').value));
}
