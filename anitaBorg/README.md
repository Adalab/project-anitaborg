# anitaBorg


Proyecto Adalab
Site homenaje a Anita Borg
16 de mayo de 2017


            Índice
            1. Objetivo
            2. Home
            3. Aprende
            4. Prueba


1. Objetivo
El objetivo de este trabajo es crear un site homenaje a Anita Borg y de esta manera ayudemos a
visualizar el papel de las mujeres en la ciencia, así como atraer a más mujeres hacia este campo.
La página no solo va a tener contenido estático sino que queremos que haya algo de contenido
dinámico obtenido otras fuentes. Además, queremos que dicho contenido sea de utilidad para el
usuario y que le sirva para aprender nuevas cosas sobre ciencia, así como poner a pruebas sus
conocimientos.
En los siguientes apartados iremos definiendo el contenido que debe mostrarse en cada una de
las páginas que componen el site.



2. Home
La home es la página más visual de todas. En ella vemos que destaca la imagen de Anita Borg así
como parte de su biografía.
Desde la home vemos que también enlazamos a las otras dos páginas del site, tanto desde un
menú superior, como desde el propio cuerpo de la página. El objetivo es invitar al usuario a que
visite el resto de apartados.




3. Aprende
Página dedicada a mostrar recursos que el usuario puede utilizar para aprender algo más sobre
informática. Los recursos serán 9 libros relacionados con “Computer Science” que se obtendrán
de la API que ofrece https://www.goodreads.com .
Para poder utilizar la api de Goodreads es necesario crearse una cuenta y obtener una API key.
Para obtener la API key debemos visitar la url:
    ● https://www.goodreads.com/api/keys
Para obtener un listado de libros relacionados con computer science podemos hacer una
petición a una url del tipo:
    ● https://www.goodreads.com/search.xml?key=apikey&q=Computer%27s+Science
Para cualquier duda se puede acudir a la documentación de la API:
    ● https://www.goodreads.com/api




4. Prueba
En esta página el usuario podrá poner a prueba sus conocimientos sobre informática
mediante un test de 10 preguntas. Las preguntas se obtendrán de la API de Open Trivia
Database. Esta API no requiere tener ninguna cuenta creada para poder consumirla. En la
siguiente página podemos obtener la url de la que consumir la información de las preguntas y
las respuestas:

    ● https://opentdb.com/api_config.php
Queda a elección del equipo de desarrolladoras la dificultad de las preguntas. Una url de
ejemplo sería:
     ● https://opentdb.com/api.php?amount=10&category=18&difficulty=medium
Las preguntas se mostrarán de una en una y en un modal. Cada respuesta correcta sumará 1
punto y cada respuesta errónea sumará 0 puntos. Tras responder a la décima pregunta el
usuario verá la puntuación obtenida en el test y podrá compartirla en Facebook.

