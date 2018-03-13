function leftAlign(){
    var text = document.getElementById("header");
    text.innerHTML="The text is left aligned!!!";
    text.style.textAlign= "left";
}

function centerAlign(){
    var text = document.getElementById("header");
    text.innerHTML="The text is center aligned!!!";
    text.style.textAlign= "center";
}

function rightAlign(){
    var text = document.getElementById("header");
    text.innerHTML="The text is right aligned!!!";
    text.style.textAlign= "right";
}

function red(){
    var text = document.getElementById("header");
    text.style.color='red';
}

function green(){
    var text = document.getElementById("header");
    text.style.color='green';
}

function blue(){
    var text = document.getElementById("header");
    text.style.color='blue';
}

function bold(){
    var text = document.getElementById("header");
    if(document.getElementById("chk1").checked){
        text.style.fontWeight = "bold";
    }else{
        text.style.fontWeight = "normal";
    }
}

function italic(){
    var text = document.getElementById("header");
    if(document.getElementById("chk2").checked){
        text.style.fontStyle = "italic";
    }else{
        text.style.fontStyle = "normal";
    }
}

function sizeChange() {
    var text = document.getElementById("header");
    var textSize = document.getElementById("size");
    text.style.fontSize=parseInt(textSize.options[textSize.selectedIndex].innerHTML) + "px";
}
