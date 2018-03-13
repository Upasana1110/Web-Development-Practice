function loadXMLDoc()
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
    request.open('GET','data.xml');

    request.onreadystatechange = function()
    {
        if (request.readyState==4 && request.status==200)
        {
            var items = request.responseXML;
            console.log(items);
            console.log(items.length);
            var nike = items.getElementsByTagName("Nike");
            console.dir(nike);

            for(var i = 0; i < nike.length; i++) {
                var user = nike[i];
                var names = user.getElementsByTagName("Product-Details");

                var output = "";
                for(var j = 0; j < names.length; j++) {
                    output +=  '<tr class="Active"> ' +
                        '<td style="color: cornflowerblue">' + names[j].getElementsByTagName("PCode")[0].childNodes[0].nodeValue + '</td>' +
                        '<td style="color: cadetblue">' + names[j].getElementsByTagName("PName")[0].childNodes[0].nodeValue + '</td>' +
                        '<td style="color: cornflowerblue">' + names[j].getElementsByTagName("MfgDate")[0].childNodes[0].nodeValue + '</td>' +
                        '<td style="color: cadetblue">' + names[j].getElementsByTagName("Price")[0].childNodes[0].nodeValue + '</td>' +
                        '<td style="color: cornflowerblue"> <img id="myImg"src = ' + names[j].getElementsByTagName("Image")[0].childNodes[0].nodeValue + '/>'  +
                        '</td> ' +
                        '</tr>';
                }
                document.getElementById("myDiv").innerHTML = output;
            }
        }
    };

    request.send();
}
loadXMLDoc();