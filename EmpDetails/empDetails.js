function Calculate(){
    var emp = document.getElementById("empno").value;
    document.getElementById("enoAns").innerHTML = emp;

    var name = document.getElementById("name").value;
    document.getElementById("enameAns").innerHTML = name;

    var opt = document.getElementById("list");
    document.getElementById("deptAns").innerHTML = opt.options[opt.selectedIndex].innerHTML;    //retreive the selected item

    var checkedValue = document.getElementById("chk");
    if(checkedValue.checked){
        document.getElementById("vehicleAns").innerHTML = "Has Vehicle";
        var pa = 100;
        document.getElementById("paAns").innerHTML = pa;
    }else{
        document.getElementById("vehicleAns").innerHTML = "Does not have vehicle";
        var pa = 0;
        document.getElementById("paAns").innerHTML = pa;
    }

    var bas = parseInt(document.getElementById("basic").value);
    document.getElementById("basicAns").innerHTML = bas;

    var da = parseInt(document.getElementById("da").value);
    document.getElementById("daAnsLabel").innerHTML= "DA@" + da + "%: ";
    document.getElementById("daAns").innerHTML = bas * (da/100);


    var hra = parseInt(document.getElementById("hra").value);
    document.getElementById("hraAnsLabel").innerHTML= "HRA@" + hra + "%: ";
    document.getElementById("hraAns").innerHTML = bas * (hra/100);

    var pf = parseInt(document.getElementById("pf").value);
    document.getElementById("pfAnsLabel").innerHTML= "PF@" + pf + "%: ";
    document.getElementById("pfAns").innerHTML = bas * (pf/100);

    document.getElementById("salAns").innerHTML= bas + (bas * (da/100)) + (bas * (hra/100)) + pa - (bas * (pf/100));
}