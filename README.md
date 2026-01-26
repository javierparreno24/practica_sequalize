Aquí tienes un README.md completo para tu proyecto practica_sequalize (con todo lo que pediste 📄):

# 🧠 API REST con AutoCRUD y MVC Reducida

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **Sequelize ORM**. Su objetivo es ofrecer una arquitectura MVC reducida junto con un sistema de **AutoCRUD** que genera automáticamente rutas, controladores y servicios para nuevos modelos.

---

## 🚀 Tecnologías

- Node.js
- Express
- Sequelize ORM (Object-Relational Mapping) :contentReference[oaicite:0]{index=0}
- MySQL / MariaDB (u otro dialecto compatible)
- AutoCRUD personalizado

---

## 🧱 1. Instalar dependencias

Clona el repositorio y, dentro de la carpeta raíz, instala las dependencias:

```bash
git clone https://github.com/javierparreno24/practica_sequalize.git
cd practica_sequalize
npm install


Esto instalará Express, Sequelize, los drivers de base de datos y otras librerías necesarias.

⚙️ 2. Configurar .env

Crea un archivo .env en la raíz del proyecto basado en este ejemplo y ajusta los valores a tu entorno:

PORT=3000
DB_NAME=nombre_de_tu_base_de_datos
DB_USER=usuario_db
DB_PASS=contraseña_db
DB_HOST=localhost
DB_DIALECT=mysql


Nota: Sequelize detecta el dialecto que uses (MySQL, MariaDB, PostgreSQL, etc.) a partir de la variable DB_DIALECT.

🛠️ 3. Ejecutar migraciones / seeds

Este proyecto no usa migraciones/seeders con CLI por defecto, sino que sincroniza los modelos automáticamente al arrancar el servidor:

sequelize.sync()


📌 Requisito: Asegúrate de tener la base de datos creada previamente (vacía) con el nombre que pusiste en el .env. Al iniciar el servidor, Sequelize creará las tablas automáticamente si no existen.

Si más adelante añades migraciones con Sequelize-CLI, podrás usar comandos como:

npx sequelize db:migrate
npx sequelize db:seed:all

▶️ 4. Ejecutar el servidor

Inicia la API con:

npm start


Por defecto, el servidor escuchará en el puerto definido en .env (p.ej. 3000).

⚡ 5. Cómo ejecutar el AutoCRUD

El archivo autocrud.js está pensado para generar automáticamente controladores, servicios y rutas basados en los modelos que tengas en la carpeta models/. Esto acelera el desarrollo CRUD.

Pasos:

Crea un nuevo modelo en la carpeta models/, por ejemplo:

// models/Producto.js
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define("Producto", {
    nombre: DataTypes.STRING,
    precio: DataTypes.FLOAT
  });
  return Producto;
};


Ejecuta el script de AutoCRUD:

node autocrud.js


Esto generará/actualizará las carpetas de:

services/

controllers/base/

routes/

Ahora tu nueva entidad ya tendrá rutas CRUD disponibles.

📡 Ejemplos de endpoints

A continuación ejemplos de cómo se consumen rutas de un recurso (usando, por ejemplo, un modelo Producto):

Método	Ruta	Descripción
GET	/api/productos	Listar todos los productos
GET	/api/productos/:id	Obtener producto por ID
POST	/api/productos	Crear un nuevo producto
PUT	/api/productos/:id	Actualizar producto por ID
DELETE	/api/productos/:id	Eliminar producto por ID

📌 Ejemplo con curl:

# Crear producto
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Camiseta","precio":19.99}'

# Obtener lista de productos
curl http://localhost:3000/api/productos

# Actualizar producto
curl -X PUT http://localhost:3000/api/productos/1 \
  -H "Content-Type: application/json" \
  -d '{"precio":21.50}'

# Eliminar producto
curl -X DELETE http://localhost:3000/api/productos/1

🧾 Contribuir

Si quieres mejorar el proyecto:

Añade nuevas rutas o modelos.

Mejora el AutoCRUD para generar validaciones y tests.

Documenta con ejemplos más detallados.
