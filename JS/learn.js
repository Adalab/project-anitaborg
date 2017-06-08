
var titleHtml = document.querySelector("title-book");
var authorHtml = document.querySelector("author-book");
var valorationHtml = document.querySelector("user-valoration");
var photoBookHtml = document.querySelector("cover-photo-book");

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
  peticionHttp.open('GET', 'https://www.goodreads.com/search.xml?key=Th7taggCCLhLD2r7cfAmlQ&q=Computer%27s+Science', true);
  peticionHttp.send(null);
  function muestraContenido() {
    if(peticionHttp.readyState == 4) {
      if(peticionHttp.status == 200) {
        //Creamos el objeto de tipo documento XML
        var documentoXml = peticionHttp.responseXML;
        //Obtenemos la raíz del documento
        var root = documentoXml.getElementsByTagName("GoodreadsResponse")[0];
        console.log(root);
        var stopPoint = 9;
        console.log(stopPoint);
        //Recorremos todos los elementos Libro del documento
        for(var i = 0; i < stopPoint; i++){
          libro = root.getElementsByTagName("best_book")[i];
          console.log(libro);
          autor = libro.getElementsByTagName("name")[0].firstChild.nodeValue;
          console.log(autor);
          titulo = libro.getElementsByTagName("title")[0].firstChild.nodeValue;
          console.log(titulo);
          img = libro.getElementsByTagName("image_url")[0].firstChild.nodeValue;
          console.log(img);
          // muestraHTML('pRespuesta',"Autor: "+autor+", t&iacute;tulo: "+titulo+"<br/>");
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
