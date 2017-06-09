// "use strict";
//
// var Name = document.getElementById('jsName');
// var InputSearch= document.getElementById('jsSearch');
// var UserPicture = document.getElementById('jsUserPicture');
// var NumberRepo= document.getElementById('jsNumberRepo');
// var InputBtn= document.getElementById('jsBtn');
// var request = new XMLHttpRequest();
//
// function searchUser(){
//   request.open('GET', 'https://api.github.com/users/'+ InputSearch.value, true);
//   request.onload = function() {
//     if (request.status >= 200 && request.status < 400) {
//       var data = JSON.parse(request.responseText);
//       Name.innerHTML = data.name;
//       Name.style.color= "blue";
//       NumberRepo.innerHTML= data.public_repos;
//       NumberRepo.style.color= "blue";
//       UserPicture.innerHTML = '<img src=" '+ data.avatar_url +' ">';
//       UserPicture.style.height="50px";
//     } else {
//       console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
//     }
//   };
//   request.onerror = function() {
//     console.log('Error al tratar de conectarse con el servidor');
//   };
//
//   request.send();
// }
//
// InputBtn.addEventListener('click', searchUser);
