var gridBooks = document.querySelector("#grid-books");
var booksHTML = "";
var stopPoint = 9;

for (var i = 0; i < stopPoint; i++) {
  var author = "autor";
  var title = "titulo";
  var valoration = "5";
  var cover = "images/cover_book_non-defined.png";
  booksHTML += '<div class="random-book"><div class="cover-photo-book"><img class="img-cover-book" src="' + cover + '" alt=""></div><div class="info-book"><p class="title-book"><span class="bold-text">' + title + '</span></p><p class="author-book">' + author + '</p><p class="user-valoration">' + valoration + '/10</p></div></div>';
}
gridBooks.innerHTML = booksHTML;

function downloadFile() {
  // Obtener la instancia del objeto XMLHttpRequest
  if (window.XMLHttpRequest) {
    peticionHttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    peticionHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // Preparar la funcion de respuesta
  peticionHttp.onreadystatechange = showInformation;
  // Realizar peticion HTTP
  peticionHttp.open('GET', 'https://www.goodreads.com/search.xml?key=fsSiGX4hSzmV0XXOXGaVg&q=Computer%27s+Science', true);
  peticionHttp.send(null);

  function showInformation() {
    if (peticionHttp.readyState == 4) {
      if (peticionHttp.status == 200) {
        //Creamos el objeto de tipo documento XML
        var documentoXml = peticionHttp.responseXML;
        //Obtenemos la raíz del documento
        var root = documentoXml.getElementsByTagName("GoodreadsResponse")[0];
        //Recorremos todos los elementos Libro del documento
        for (var i = 0; i < stopPoint; i++) {
          var book = root.getElementsByTagName("best_book")[i];
          var author = book.getElementsByTagName("name")[0].firstChild.nodeValue;
          var title = book.getElementsByTagName("title")[0].firstChild.nodeValue;
          var valoration = root.getElementsByTagName("average_rating")[0].firstChild.nodeValue;
          var cover = book.getElementsByTagName("image_url")[0].firstChild.nodeValue;
          if (cover === "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png") {
            cover = "images/cover_book_non-defined.png";
          }
          booksHTML += '<div class="random-book"><div class="cover-photo-book"><img class="img-cover-book" src="' + cover + '" alt=""></div><div class="info-book"><p class="title-book"><span class="bold-text">' + title + '</span></p><p class="author-book">' + author + '</p><p class="user-valoration">' + valoration + '/10</p></div></div>';
        }
        gridBooks.innerHTML = booksHTML;
      }
    }
  }
}


window.onload = downloadFile;
