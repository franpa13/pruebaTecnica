

# PRUEBA TECNICA REACT + TS 
# UX/UI

Me basé en un enfoque intuitivo y fácil de usar, con el objetivo de proporcionar una experiencia fluida para el usuario. La interfaz presenta una tabla clara con tres columnas que muestran los usuarios, lo cual facilita la visualización y organización de la información. Además, incluye una barra de búsqueda que permite al usuario filtrar los resultados de la tabla en tiempo real, a medida que escribe, mostrando solo aquellos usuarios cuyos datos coincidan con la búsqueda.

El diseño está pensado para ser parte de un dashboard de administración de un eCommerce, donde el administrador puede gestionar de manera eficiente los usuarios registrados en la plataforma. Además de poder consultar sus datos, el administrador podrá revisar las últimas órdenes realizadas por cada usuario, brindando una visión completa del historial de interacciones en el sitio.

Para mejorar la comodidad visual, el sistema incluye un modo oscuro por defecto, que es el que utilizo personalmente, pero también permite al usuario cambiarlo según sus preferencias, adaptándose a las necesidades de cada uno.

Aunque no era estrictamente necesario, implementé el uso de un componente de loading (spinner) que se activa cuando se realiza una petición (en este caso, a datos estáticos). Creo que el spinner mejora la interacción con el usuario en casos reales, especialmente cuando la carga de datos puede tardar.

# COMO HARIA EL PROYECTO ESCALABLE PARA LISTAS MAS GRANDES ? 
-Para lista más grandes recomendaría el filtrado de datos del lado del servidor, es decir un endpoint que la búsqueda la procese el backend, esto es recomendable para listas muy grandes
-Implementar lazy loading, por ejemplo cargar los datos mientras el usuario hace scroll hacia abajo, es decir solo renderizar los elementos necesarios
-Implementaria el uso de React Query o librerias parecidas para optimizar el fetching y caching de datos.

# TECNOLOGIAS USADAS
REACT JS + TYPESCRIPT
TAILWIND CSS - Utilicé Tailwind CSS por su flexibilidad y eficiencia al permitir el diseño de componentes de manera rápida sin sacrificar la personalización(teniendo una paleta de colores ya declarada)
MATERIAL UI - Material UI pme da una base sólida de componentes visuales, con un diseño consistente y accesible, que facilita la implementación de una UI moderna y atractiva.
FRAMER MOTION - Para las animaciones.
REACT ROUTER DOM -Usado para la gestión de rutas, permitiendo una navegación dinámica y sencilla dentro de la aplicación.
ZUSTAND - Si bien no era totalmente necesario, esta librería de manejo de estado es simple y ligera, lo que permite una gestión del estado eficiente y sencilla junto con un codigo escalable.


## DEPLOY EN VERCEL
https://prueba-tecnica-gilt.vercel.app/


## Inicialización del Proyecto

Sigue estos pasos para inicializar y ejecutar el proyecto localmente.

### 1. Clonar el repositorio

Si aún no tienes el proyecto en tu máquina local, clona el repositorio con el siguiente comando:


git clone https://github.com/franpa13/pruebaTecnica.git

### 2.
Ubicate en el directorio pruebaTecnica y ejecuta npm i


### 3.
La app se ejecutara en [local](http://localhost:5173/)

