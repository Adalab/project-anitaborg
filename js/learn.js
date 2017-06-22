var gridBooks = document.querySelector("#grid-books");
var booksHTML = "";
var stopPoint = 9;
var titlesDefault = ["Algorithms to Live By: The Computer Science of Human Decisions", "Concrete Mathematics: A Foundation for Computer Science", "Structure and Interpretation of Computer Programs (MIT Electrical Engineering and Computer Science", "Computer Science: An Overview", "Software Engineering (International Computer Science Series", "Python Programming: An Introduction to Computer Science", "Writing for Computer Science", "Mathematics for Computer Science", "The New Turing Omnibus: 66 Excursions In Computer Science"];
var authorsDefault = ["Brian Christian", "Ronald L. Graham", "Harold Abelson", "J. Glenn Brookshear", "Ian Sommerville", "John M. Zelle", "Justin Zobel", "Eric Lehman", "A.K. Dewdney"];
var valorationsDefault = ["4.16", "4.30", "4.45", "3.76", "3.72", "3.94", "3.97", "3.97", "3.84"];
var coversDefault = ["https://images.gr-assets.com/books/1454296875m/25666050.jpg", "images/cover_book_non-defined.png", "images/cover_book_non-defined.png", "images/cover_book_non-defined.png", "images/cover_book_non-defined.png", "images/cover_book_non-defined.png", "images/cover_book_non-defined.png", "https://images.gr-assets.com/books/1375771781m/12836498.jpg", "images/cover_book_non-defined.png"];

for (var i = 0; i < stopPoint; i++) {
  var title = titlesDefault[i];
  var author = authorsDefault[i];
  var valoration = valorationsDefault[i];
  var cover = coversDefault[i];
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
        booksHTML = "";
        for (var j = 0; j < stopPoint; j++) {
          var book = root.getElementsByTagName("best_book")[j];
          var author = book.getElementsByTagName("name")[0].firstChild.nodeValue;
          var title = book.getElementsByTagName("title")[0].firstChild.nodeValue;
          var valoration = root.getElementsByTagName("average_rating")[i].firstChild.nodeValue;
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
