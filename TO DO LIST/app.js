document.getElementById("add").addEventListener("click", displayitem);

function displayitem() {
  document.getElementById("demo").innerHTML = AddItem();
}


var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "fa-solid fa-trash";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("fa-solid fa-trash");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
 /*var myNodelists = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelists.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "fa-solid fa-square-check";
  span.appendChild(txt);
  myNodelists[i].appendChild(span);
}
var check = document.getElementsByClassName("fa-solid fa-square-check");
var i;
for (i = 0; i < close.length; i++) {
  check[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}*/


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById(".inputform").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You have nothing to do!");
  } else {
    document.getElementById(".list").appendChild(li);
  }
  document.getElementById(".inputform").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "fa-solid fa-trash";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

document.getElementById("remove").addEventListener("click", diplaynone);

function displaynone() {
  document.getElementById("remove").innerHTML = removeall();
}