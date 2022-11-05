function hello() {
    alert("Hello, world!");
}
function bigger() {
    alert("bigger");
    var textArea = document.getElementById("textArea");
    textArea.style.fontSize="24pt";
}

function fancy() {
    var textArea = document.getElementById("textArea");
    if(document.getElementById("fancy").checked) {
        alert("fancy");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline blink";
    }
}

function boring(){ 
    var textArea = document.getElementById("textArea");
    if(document.getElementById("boring").checked) {
        alert("boring");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
function moo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    var newText = text.toUpperCase();
    var mooText = newText.split(".").join("-Moo.");
    textArea.value = mooText;
}