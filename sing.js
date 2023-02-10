var user = document.getElementById('user');
var mot = document.getElementById('mot');
var btn = document.getElementById('btn');
var incor = document.getElementById('ic');
var box = document.getElementById('box');


function login() {
    if (user.value === 'nabil gh' && mot.value === '1234') {
        incor.style.display = "none"
        box.style.background = "red"

    } else {
        incor.style.display = "flex"
        box.style.background = "#808080"
    }


    user.focus();

}