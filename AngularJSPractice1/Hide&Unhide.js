function hideUnhide() {
    var a = document.getElementById("hide");
    var b = document.getElementById("myId");

    if(b.checked){
        a.innerHTML = "UnHide";
    }else{
        a.innerHTML = "Hide";
    }
}