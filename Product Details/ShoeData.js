function loadJSONDoc()
{
    var request;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        request=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        request=new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET','data.json');

    request.onreadystatechange = function()
    {
        if (request.readyState==4 && request.status==200)
        {
            var items = JSON.parse(request.responseText);
            console.log(items);
            console.log(items.length);


            //var i in each items[i]
            var output = "";
            for(var i in items){
                output +=  '<tr class="Active"> ' +
                    '<td style="color: cornflowerblue">' + items[i].PCode + '</td>' +
                    '<td style="color: cadetblue">' + items[i].PName + '</td>' +
                    '<td style="color: cornflowerblue">' + items[i].MfgDate + '</td>' +
                    '<td style="color: cadetblue">' + items[i].Price + '</td>' +
                    '<td style="color: cornflowerblue"> <img height="100px" width="100px" src = ' + items[i].Image + '/>'  +
                    '</td> ' +
                    '</tr>';
            }

            document.getElementById("myDiv").innerHTML = output;

        }
    };

    request.send();
}
loadJSONDoc();