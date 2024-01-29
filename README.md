# MOVIEVERSE - MovieChallengeAngular

* [1. Introducción](#1-introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Prototipo de baja y alta fidelidad](#4-prototipo-de-baja-y-alta-fidelidad)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Desarrolladora web](#6-desarrolladora-web)

## 1. Introducción

La manera en que vemos películas ha cambiado radicalmente durante los últimos años debido, en parte, a la aparición de los servicios de streaming que nos permiten hacerlo desde cualquier lugar y momento.

La creación de nuevas aplicaciones web que faciliten el proceso de búsqueda o consumo de una película está impulsada por la necesidad de proporcionar a los usuarios una experiencia cinematográfica más personalizada y accesible. Estas aplicaciones se centran en ofrecer funciones de búsqueda, información detallada sobre las películas, y una interfaz intuitiva para una navegación fluida, como el proyecto que se describe a continuación.

## 2. Resumen del proyecto

MOVIEVERSE es una Single Page Application (SPA) que brinda una experiencia de búsqueda cinematográfica, permitiendo a los usuarios filtrar y ordenar un amplio catálogo de películas según métricas y géneros específicos, obteniendo la data de The Movie Database API V3.

![image](https://raw.githubusercontent.com/DanielaPosadas/DEV012-Movie-Challenge/main/Vista-Home.png)

Para reiniciar la búsqueda, hay un botón de limpieza que restablece los filtros, y la aplicación ofrece un ordenamiento predeterminado basado en las películas más populares.

![image](https://raw.githubusercontent.com/DanielaPosadas/DEV012-Movie-Challenge/main/Paginador-Home.png)

El catálogo se organiza en 5 páginas con un paginador para una navegación sencilla. Al hacer clic en una película, se accede a información detallada y se puede regresar a la vista de búsqueda con un simple clic en la flecha del navegador, manteniendo los filtros originales. Con una interfaz intuitiva y atractiva, MOVIEVERSE se destaca por su accesibilidad y facilidad de uso para usuarios de todos los niveles.

![image](https://raw.githubusercontent.com/DanielaPosadas/DEV012-Movie-Challenge/main/Vista-Detalle.png)

## 3. Historias de usuario

MOVIEVERSE ha cumplido con tres historias de usuario que posibilitan la filtración y ordenación de películas, así como la navegación en el catálogo mediante un paginador. En la definición de terminado para cada historia de usuario, se han creado pruebas unitarias para cada componente y servicio en la aplicación.

#### [Historia de usuario 1] Listado de películas

Yo como usuaria quiero visualizar en un tabla (filas y columnas) el catálogo de películas

##### Criterios de aceptación

- Se debe usar el _endpoint_ [/discover/movie].
- La aplicación cuenta con una paginación para explorar el catálogo por páginas.
- Para cada película se debe mostrar como mínimo:
poster, título original y año de lanzamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

#### [Historia de usuario 2] Filtro y ordenamiento

Yo como usuaria quiero filtrar y ordenar el catálogo de películas usando
los criterios soportados por _TheMovie Database API V3_

##### Criterios de aceptación

- Para filtrar se debe usar el _endpoint_
[/discover/movie],
y alguno de sus parámetros como por ejemplo _with_genres_.
- Para ordenar se debe usar el _endpoint_
[/discover/movie],
y alguno de sus parámetros como por ejemplo _sort_by_.
- La paginación debe conservar el filtro y ordenamiento
- Para cada película se debe mostrar como mínimo:
poster, título original y año de lanzamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

#### [Historia de usuario 3] Detalle de una película

Yo como usuaria quiero consultar los detalles de una película

##### Criterios de aceptación

- Se debe usar el _endpoint_
[/movie/{movie_id}].
- Para la película se debe mostrar como mínimo: poster, título original,
año de lanzamiento, géneros, promedio de votación y total de votos.
- La interfaz debe permitir retornar al listado de películas conservando
el filtro y ordenamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

## 4. Prototipo de baja y alta fidelidad

![image](https://raw.githubusercontent.com/DanielaPosadas/DEV012-Movie-Challenge/main/Prototipo-Alta.png)

Se han desarrollado prototipos tanto de baja como alta fidelidad para este proyecto. El prototipo de alta fidelidad incluye una guía de estilos que ha sido aplicada para lograr una estructura visual agradable e intuitiva. Se realizaron maquetas tanto para la vista principal como para la vista de detalle de la película, proporcionando una representación clara del resultado final.

![image](https://raw.githubusercontent.com/DanielaPosadas/DEV012-Movie-Challenge/main/Prototipo-Alta2.png)

## 5. Consideraciones técnicas

Esta Single Page Application (SPA) se desarrolló mediante el framework Angular utilizando TypeScript y estilos definidos en SASS. Está compuesta por componentes reutilizables, dos vistas principales (home y detalle), un servicio y archivos de interfaces. La estructura permite realizar solicitudes a una API externa para obtener la información esencial de películas. Sin embargo, cabe mencionar que la aplicación no cuenta con diseño responsive y está optimizada para su visualización en computadoras, no en dispositivos móviles.

## 6. Desarrolladora web

| [<img src="https://avatars.githubusercontent.com/u/144648301?v=4" width=115><br><sub>Daniela Posadas</sub>](https://github.com/DanielaPosadas) |
| :---: |
