var button = document.getElementById('button');
var multiply = 2
var add = 5
var more = 50
var firstFunction = function () {
    var size = document.getElementById ('size').value;
    var year = document.getElementById ('year').value;
    alert ((((size * multiply + add) * more) - year) + 1769 )
}

button.addEventListener('click', firstFunction);