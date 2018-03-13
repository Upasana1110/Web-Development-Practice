function addToList() {
    var data = document.getElementById("a").value;
    var list = document.getElementById("list");
    var li = document.createElement("li");
    li.innerHTML = data;
    list.appendChild(li);
    document.getElementById("a").value = "";
}