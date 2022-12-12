import express from "express";
import dataBase from "./database/DatabaseSQL.js";
import productoRouter from "./routes/ProductoRoutes.js";
import cors from "cors"

const app = express();
const por = 3001;

app.use(cors())
app.use(express.json())

app.use("/productos", productoRouter)

try {
  await dataBase.authenticate();
  console.log("coneccion exitosa");
} catch (error) {
  console.log("conexion no exitosa: $(error)");
}

app.listen(3001, () => {
  console.log("servidor corriendo en el puerto  3001");
  console.log("http://localhost:3001");

})
