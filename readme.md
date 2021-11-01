# Readme para Front end prueba BSale

Esta sencilla aplicacion integra HTML, Vanilla Javascript, y CSS(Con apoyo de la libreria bootstrap), para consumir mediante una RESTful API productos de una base de datos

Esta aplicacion posee un deployment en Heroku, accesible mediante el link [Frontend Prueba BSale](https://bsalefrontendjhernandez.herokuapp.com/) 

Heroku esta siendo excepcionalmente inestable al momento de escribir este documento, sirviendo desde cache archivos de deployments anteriores, ruego tener consideracion

El contenido en general es recuperado desde la base de datos proporcionada en el archivo de requisitos

Las busquedas son realizadas con una solicitud GET al servidor, usando el termino `LIKE ` de SQL comparando el termino de busqueda con la columna name de la tabla products

Los filtros de categorias son igualmente realizados desde el servidor, comparando el ID desde un selector, y retornando unicamente los datos filtrados

Los endpoints usados por la aplicacion son los siguientes:

* /api/products/ GET, retorna un json con todos los productos
* /api/products/:id GET, retorna un json con el producto correspondiente a ese id 
* /api/categories/ GET, retorna un json con todas las categorias
* /api/categories/:id GET, retorna un json con la categoria correspondiente a ese id
* /api/search/:searchterm GET, retorna un json con todos los objetos que correspondan vagamente al termino

El boton de agregar carrito unicamente activa una funcion para generar un alert, lo mas logico seria generar una solicitud post con los productos añadidos al carrito, pero las solicitudes post no irian a ninguna parte, para ese efecto, el alert provee el feedback demostrable al boton