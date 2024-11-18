const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 3001;

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    // database: "tu base de datos", 
  }); //creamos la configuración para conectarnos a la bd
  
  db.connect();

// Crea las siguientes tablas usando Express y MySQL como hemos visto en clase:
// Tabla Products
// Tabla Categories
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE expressDB";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Database created...");
    });
  });
  
// Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman


// Crea un endpoint para crear una categoría y añade 2 categorías nuevas desde el postman


// Crea un endpoint para actualizar un producto. 


// Crea un endpoint para actualizar una categoría.



// Crea un endpoint que muestre todos los productos



// Crea un endpoint que muestre todas las categorías



// Crea un endpoint que muestra todos los productos con sus categorías



// Crea un endpoint donde puedas seleccionar un producto por id



// Crea un endpoint que muestre de forma descendente los productos.



// Crea un endpoint donde puedas seleccionar una categoría por id



// Crea un endpoint donde puedas buscar un producto por su nombre



// Crea un endpoint donde puedas eliminar un producto por su id


app.listen(PORT, () => console.log("Servidor levantado en el puerto " + PORT));