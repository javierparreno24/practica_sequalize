# PROYECTO: API REST con AutoCRUD y MVC Reducida

Este proyecto implementa una arquitectura MVC reducida utilizando Node.js y Sequelize. Incluye un sistema de **AutoCRUD** que genera automáticamente las rutas y controladores para nuevos modelos.

## 1. Cómo instalar dependencias

Ejecutar el siguiente comando en la raíz del proyecto para descargar las librerías necesarias (Express, Sequelize, MySQL2, etc.):

```bash
npm install
##  2. Cómo configurar .env 
Crear un archivo llamado .env en la raíz del proyecto y definir las variables de conexión a la base de datos:

Ini, TOML
PORT=3000
DB_NAME=nombre_de_tu_base_datos
DB_USER=root
DB_PASS=tu_contraseña
DB_HOST=localhost
DB_DIALECT=mysql
## 3. Cómo ejecutar migraciones/seed
El proyecto está configurado para sincronizar los modelos automáticamente al iniciar la aplicación (usando sequelize.sync()).

Requisito: Tener creada la base de datos vacía en MySQL/MariaDB.

Nota: Al arrancar el servidor, las tablas se crearán automáticamente si no existen.

 ## 4. Cómo lanzar el servidor
Para iniciar la API en modo producción o desarrollo:

Bash
npm start
El servidor escuchará en el puerto definido en el .env (por defecto 3000).

## 5. Cómo ejecutar el AutoCRUD
El script autocrud.js escanea la carpeta models/ y genera automáticamente los archivos necesarios para la arquitectura MVC.

Pasos:

Crear un nuevo modelo en la carpeta models/ (ej: Producto.js).

Ejecutar el comando:

```bash
node autocrud.js
El script generará/actualizará:

services/

controllers/base/

routes/
