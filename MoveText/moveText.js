var id;
var pos1 = 0;
var pos2 = 0;
var srt = true;

function start() {
    if(srt === true){
        srt = false;
        var elem = document.getElementById("text");
        id = setInterval(time, 10);
        function time(){
            if(pos1 == 500 || pos2 == 500){
                pos1 = 0;
                pos2 = 0;
            }
            else if(document.getElementById("chk").checked){
                pos2++;
                elem.style.left = pos2 + 'px';
            }else{
                pos1++;
                elem.style.top = pos1 + 'px';

            }
        }
    }
}

function stop() {
    srt = true;
    var elem = document.getElementById("text");
    clearInterval(id);
}

function reset() {
    srt = true;
    var elem = document.getElementById("text");
    pos1 = 0;
    pos2 = 0;
    elem.style.top = pos1;
    elem.style.left = pos2;
    clearInterval(id);
}
