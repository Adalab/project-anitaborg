"use strict";
var title = document.querySelector("title-book");
var autor = document.querySelector("author-book");
var valoration = document.querySelector("user-valoration");
var photoBook = document.querySelector("cover-photo-book");
var request = new XMLHttpRequest();

function search() {
  request.open("GET", "https://www.goodreads.com/search.xml?key=Th7taggCCLhLD2r7cfAmlQ&q=Computer%27s+Science");
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, "text/xml");
      title.innerHTML = parser.title;
      autor.innerHTML = parser.author;
      valoration.innerHTML = parser.average_rating;
      photoBook.innerHTML = '<img src ="' + parser.image_url + '">';

    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
    request.onerror = function() {
      console.log('Error al tratar de conectarse con el servidor');
    };

    request.send();
  }
}
window.onload = search(xmlDoc);
<?xml version="1.0" encoding="ISO-8859-1" ?>
<Obras_literarias>
  <Libro>
     <Autor>Juan Rulfo</Autor>
     <Titulo>Pedro Páramo</Titulo>
  </Libro>
  <Libro>
     <Autor>Juan Rulfo</Autor>
     <Titulo>El Llano en Llamas</Titulo>
  </Libro>
  <Libro>
     <Autor>Pablo Neruda</Autor>
     <Titulo>Veinte poemas de amor y una canción desesperada</Titulo>
  </Libro>
  <Libro>
     <Autor>Miguel de Cervantes Saavedra</Autor>
     <Titulo>Don Quijote de la Mancha</Titulo>
  </Libro>
  <Libro>
     <Autor>Jorge Luis Borges</Autor>
     <Titulo>Ficciones</Titulo>
  </Libro>
</Obras_literarias>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/
xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Obtener lista XML de autores con Ajax</title>
<script type="text/javascript">
function descargaArchivo() {
  // Obtener la instancia del objeto XMLHttpRequest
  if(window.XMLHttpRequest) {
     peticionHttp = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    peticionHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // Preparar la funcion de respuesta
  peticionHttp.onreadystatechange = muestraContenido;
  // Realizar peticion HTTP
  peticionHttp.open('GET', 'http://localhost/listaX.xml', true);
  peticionHttp.send(null);
  function muestraContenido() {
    if(peticionHttp.readyState == 4) {
      if(peticionHttp.status == 200) {
        //Creamos el objeto de tipo documento XML
        var documentoXml = peticionHttp.responseXML;
        //Obtenemos la raíz del documento
        var root = documentoXml.getElementsByTagName("Obras_literarias")[0];
        var tope = root.getElementsByTagName("Libro").length;
        //Recorremos todos los elementos Libro del documento
        for(var i = 0; i < tope; i++){
          libro = root.getElementsByTagName("Libro")[i];
          autor = libro.getElementsByTagName("Autor")[0].firstChild.nodeValue;
          titulo = libro.getElementsByTagName("Titulo")[0].firstChild.nodeValue;
          muestraHTML('pRespuesta',"Autor: "+autor+", t&iacute;tulo: "+titulo+"<br/>");
        }
      }
    }
  }
  function muestraHTML(id, texto){
    if(document.getElementById){
      document.getElementById(id).innerHTML += texto;
    }
  }
}
window.onload = descargaArchivo;
</script>
</head>
<body>
<p id="pRespuesta"></p>
</body>
</html>
