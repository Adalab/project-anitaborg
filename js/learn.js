var gridBooks = document.querySelector("#grid-books");

function downloadFile() {
  // Obtener la instancia del objeto XMLHttpRequest
  if (window.XMLHttpRequest) {
    peticionHttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    peticionHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // Preparar la funcion de respuesta
  peticionHttp.onreadystatechange = muestraContenido;
  // Realizar peticion HTTP
  peticionHttp.open('GET', 'https://www.goodreads.com/search.xml?key=Th7taggCCLhLD2r7cfAmlQ&q=Computer%27s+Science', true);
  peticionHttp.send(null);

  function muestraContenido() {
    if (peticionHttp.readyState == 4) {
      if (peticionHttp.status == 200) {
        //Creamos el objeto de tipo documento XML
        var documentoXml = peticionHttp.responseXML;
        //Obtenemos la raíz del documento
        var root = documentoXml.getElementsByTagName("GoodreadsResponse")[0];
        var stopPoint = 9;
        //Recorremos todos los elementos Libro del documento
        var booksHTML = "";
        for (var i = 0; i < stopPoint; i++) {
          var book = root.getElementsByTagName("best_book")[i];
          var author = book.getElementsByTagName("name")[0].firstChild.nodeValue;
          var title = book.getElementsByTagName("title")[0].firstChild.nodeValue;
          var valoration = root.getElementsByTagName("average_rating")[0].firstChild.nodeValue;
          var cover = book.getElementsByTagName("image_url")[0].firstChild.nodeValue;
          booksHTML += '<div class="random-book"><div class="cover-photo-book"><img class="img-cover-book" src="' + cover + '" alt=""></div><div class="info-book"><p class="title-book"><span class="bold-text">' + title + '</span></p><p class="author-book">' + author + '</p><p class="user-valoration">' + valoration + '/10</p><p class="isbn-number">ISBN:</p></div></div>';
        }
        gridBooks.innerHTML = booksHTML;
      }
    }
  }
}

window.onload = downloadFile;
