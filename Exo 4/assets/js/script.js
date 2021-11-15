var submit = document.getElementById('submit');
submit.addEventListener('click',function submit(){

    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var age = document.getElementById('age').value;
    alert('Votre Nom : '+nom+'\nVotre Prénom : '+prenom+'\nVotre Age : '+age);
    });

// seconde manière
var submit = document.getElementById('submit');
var recupValue = function () {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var age = document.getElementById('age').value;
    alert('Votre Nom : '+nom+'\nVotre Prénom : '+prenom+'\nVotre Age : '+age);
    };
submit.addEventListener('click', recupValue);