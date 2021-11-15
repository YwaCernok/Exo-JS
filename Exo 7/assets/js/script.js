var button = document.getElementById('button');

var getValue = function () {
    var year = document.getElementById ('year').value;
    if (year >= 18) {
        alert ('Vous êtes majeur')
     } else {
        alert ('Vous êtes mineur')
     }
}
button.addEventListener('click', getValue);