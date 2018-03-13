function showResult(){
    console.log("dssdf");
    var mrks1 = parseInt(document.getElementById("mrk1").value);
    var mrks2 = parseInt(document.getElementById("mrk2").value);
    var mrks3 = parseInt(document.getElementById("mrk3").value);

    var tot = document.getElementById("ttl");
    tot.value= mrks1 + mrks2 + mrks3;

    var per = document.getElementById("perc");
    per.value = (tot.value/300)*100;

    var res = document.getElementById("result");
    if(mrks1 >= 40 && mrks2 >= 40 && mrks3 >= 40){
        res.innerHTML = "PASS";
    }else {
        res.innerHTML= "FAIL";
    }

    var gd = document.getElementById("gradeResult");
    console.dir(gd);
    if(per.value >= 80){
        gd.innerHTML = "A+";
    }else if(per.value >= 70 && per.value <= 79){
        gd.innerHTML = "A";
    }else if(per.value >= 60 && per.value <= 69){
        gd.innerHTML= "B";
    }else{
        gd.innerHTML = "C";
    }
}
