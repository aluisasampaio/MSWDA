window.addEventListener("keydown", displayKey);

function displayKey(e){
var pressedKey = e.key;
var keyCode = e.keyCode;
document.getElementById("display").innerHTML = pressedKey + " (KeyCode = "+ keyCode + ")"

}

  
