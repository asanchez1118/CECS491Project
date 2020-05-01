import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* initializing elements */
var events = document.getElementsByTagName("LI");
var i;
for (i = 0; i < events.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	events[i].appendChild(span);
}

/* appending the close function */
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
