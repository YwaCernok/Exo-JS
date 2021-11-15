var firstName = 'Bobo'
var secondeDiv = document.getElementById('secondeDiv');

username.addEventListener("keyup", function () {
    var username = document.getElementById('username').value;
    console.log(username)
    if (username==firstName) { 
        var firstDiv = document.getElementById('firstDiv');
        firstDiv.style.display = "block";
        secondeDiv.style.display = "none";
        }
    else {
        secondeDiv.style.display = "block";
        }
})

