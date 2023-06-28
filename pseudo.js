let button = document.getElementById('button')

let pseudo= document.getElementById('prenom')
// let image = document.getElementById('image')

// let fileTypes = [
//     'image/jpeg',
//     'image/png'
//   ]
//   function validFileType(file) {
//     for(let i = 0; i < fileTypes.length; i++) {
//       if(file.type === fileTypes[i]) {
//         return true;
//       }
//     }
  
//     return false;
//   }

button.addEventListener('click', () => {
    if(pseudo.value == ""){
        alert('Le champ Pseudo est vide');
    }
    else{
        alert("Vous pouvez passer à la dernière étape");
    }
})
