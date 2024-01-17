# Changelog

## 1.0.2 - 2024-01-16

### Sprint learnings

- Comprendí y reforcé conceptos relacionados a Angular.
- Analicé mi código para depurarlo con respecto al servicio.
- Reforcé el concepto de comunicación entre componentes hijo-padre y momentos en los que puede haber errores.
- Implementé elementos HTML y entendí cómo desencadenar eventos del DOM en ellos.

### Added

- Se agrega el filtro y ordenamiento funcional, también el posible uso de un botón limpiar.
- Se agregan estilos a ambos filtros.

### Fixed

- Depuré el servicio ya que hacía peticiones que finalmente dejé de utilizar.
- Utilizo una sola petición para el filtro, el ordenamiento y la paginación.
- Agregué condicionales if a la paginación para que me mostrara siempre las peliculas más populares al no tener filtro u orden.

## 1.0.1 - 2024-01-09

### Sprint learnings

- Comprendí y reforcé diversos conceptos relacionados a Angular.
- Reforcé el aprendizaje sobre las peticiones a la api para obtener las películas por página.
- Entendí la comunicación entre componentes padre-hijo/hijo-padre.
- Logré comprender cómo se pasan parámetros entre métodos dentro de los componentes.

### Added

- Se agrega la paginación: por página y a través de un botón previous/next.
- Se implementa la librería bootstrap para darle estilos al paginador.

### Fixed

- Le pasé los parámetros correctos de página a la url de la api para que el endpoint hiciera la petición de manera correcta. Lo verifiqué a través de postman.

## 1.0.0 - 2024-01-04

### Sprint learnings

- Comprendí diversos conceptos relacionados a Angular.
- Aprendí a utilizar postman para verificar que la petición fuera correcta.
- Aprendí a crear componentes, servicios e interfaces.
- Dentro del servicio logré hacer la petición a la api TMDB.

### Added

- Se agrega la vista home donde se renderizan las películas de la página 1 en filas y columnas haciendo la petición a la api.

### Fixed

- No estaba colocando de manera correcta las interfaces que condicionaban/tipaban las variables de mi petición.
