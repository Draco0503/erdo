# El Rincon del Otaku Web

## Trabajo realizado por Patricia Cobos y Alejandro Escamilla

> **Nota:** para que el carrito funcione, tiene que visitar la página "index.html" para que inicialize dicho carrito. En otro caso el carrito no existirá, debido a que se creará en LocalStorage.

## Estructura
- ## HTML5
    - [index.html](index.html) - Página principal
    - [news.html](news.html) - Página con el listado de las novedades
        - [news1.html](news-pages/news1.html) - Noticia 1
        - [news2.html](news-pages/news2.html) - Noticia 2
        - [news3.html](news-pages/news3.html) - Noticia 3
        - [news4.html](news-pages/news4.html) - Noticia 4
        - [news5.html](news-pages/news5.html) - Noticia 5
    - [products.html](products.html) - Página con varias funciones:
    ```html
    products.html?data-id=number
    ```
    > Donde "number" es un numero entre 1 y 116, mostrará la informacion detallada de un solo producto
    ```html
    products.html?category=category-name
    ```
    > Donde "category-name" es una categoria de entre \["Accion", "Apocaliptico", "Artes marciales", "Aventura", "Genero Bender", "Ciencia Ficcion", "Comedia", "Crimen", "Demonios", "Deporte", "Drama", "Ecchi", "Gore", "Harem", "Historia", "Horror", "Magia", "Manhwa", "Mecha", "Militar", "Misterio", "Musica", "Policiaco", "Psicologico", "Reencarnacion", "Rencuentros de la vida", "Romance", "Samurai", "Sobrenatural", "Superpoderes", "Supervivencia", "Thriller", "Tragedia", "Vampiros", "Vida escolar", "Yaoi", "Yuri"], y **hará un pequeño filtro de entre los productos**.
    - [orders.html](orders.html) - Página para hacer el pedido a contrarembolso
    - [about-us.html](about-us.html) - Página con la información de la tienda
    - [cart.html](cart.html) - Página del carrito

- ## CSS
    - [style.css](css/style.css) - Contiene el estilo de todos los .html

- ## JavaScript
    - [slider.js](js/slider.js) - Contiene la función que maneja el Slider de index.html
    ```js
    function plusSlide(n); // Va cambiando entre slides
    function showSlide(n); // Muestra el slide correspondiente
    ```
    - [index-products.js](js/index-products.js) - Contiene todas las demás funciones del proyecto, además del json con los datos de los productos:

    ### < index.html >
    ```js
    function _init_(); // Inicializa el carrito en LocalStorage
    function showRndProd(); // Llama a _init_() y es usada en "index.html" para mostrar solo 5 diferentes productos
    ```
    ### < products.html >
    ```js
    function choose(); // Elige para ver si llama a showAll(), showCategory(category) o showProd(id)
    function showAll(); // Usada en "products.html" para mostrar todos los productos
    function showCategory(category); // Muestra los productos de la categoria parada por parametro
    function showProd(id); // Muestra el producto cuyo id sea el que se pasa por parametro
    ```
    ### < cart.html >
    ```js
    function showCart(); // Muestra y actualiza el carrito
    function removeCart(id); // Elimina el producto cuyo id sea el pasado por parametro
    ```
    ### < orders.html >
    ```js
    function getTotal(); // Muestra el total del importe del carrito
    ```
    ### < Otros >
    ```js
    function add2Cart(id); // Cada producto contiene un boton con esta funcion, añade el producto al carrito
    function getCart(); // Muestra el carrito por consola
    ```
- ## JSON
    - [uwu.json](json/uwu.json) - Contiene la informacion de los 116 productos, todos tienen la misma estructura:
    ```json
    {
        "mangas": [
            {
                "id": "numero",
                "name": "nombre",
                "img": "ruta donde la imagen esta (en local)",
                "descr": "descripcion",
                "category": ["array de categorias"],
                "stock": 0 /*no se usa*/,
                "price": 0.00 /*precio*/
            }
        ]
    }
    ```
- ## resources
    - [img/](resources/img/) - Contiene imágenes como el logo, el carrito y el favicon
        - [products/](resources/img/products/) - Contiene las imágenes de los productos
        - [test/](resources/img/test/) - Imágenes de prueba
    - [news/](resources/news/) - Contiene las imágenes de las noticias de la página
    - [video/](resources/video/) - Contiene los videos utilizados en la página