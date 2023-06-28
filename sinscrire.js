let button = document.getElementById('button')
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let datedenaissance = document.getElementById('datedenaissance')
let mail = document.getElementById('mail')
let mdp = document.getElementById('mdp')
let mdp2 = document.getElementById('mdp2')

button.addEventListener('click', () => {  
    
    if (nom.value,prenom.value,mail.value,datedenaissance.value,mdp.value,mdp2.value == ""){
        alert(' ATTENTION : Des champs ne sont pas remplis');
        
    }
    else{
        alert("Vous pouvez passez à l'étape 2")
    }

})
