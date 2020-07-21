﻿﻿var list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
        } else if(ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
        div.remove();
        }
    }, 
    false);
function newElement() {
    var li = document.createElement('li');
    var inputVal = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputVal);
    li.appendChild(t);
        if(inputVal == "") {
        alert("Ничего не введено!");
        } else {
        document.getElementById('list').appendChild(li);
        }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}