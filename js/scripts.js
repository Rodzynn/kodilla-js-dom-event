// plik scripts.js
var list = document.getElementById('list');
console.log(list);

function changeText2() {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode("item " + document.getElementsByTagName('li').length));
    list.appendChild(entry);
}