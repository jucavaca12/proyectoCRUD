import dataBase from "../database/DatabaseSQL.js";
import {Sequelize } from "sequelize";

const Producto = dataBase.define("productos",{
nombre:{
    type: Sequelize.STRING
}, 
descripcion : {
    type: Sequelize.STRING
}
})

export default Producto;