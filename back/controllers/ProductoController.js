import Producto from "../models/ProductoModels.js";

const crearProducto = async (request, response) => {
  try {
    await Producto.create(request.body);
    response.json({
      menssage: "Usuario creado correctamente",
    });
  } catch (error) {
    response.json({
      message: `No se pudo registrar ${error}`,
    });
  }
};

const mostrarProductos= async (request,response) => {
  try {
    const productos=await Producto.findAll()
    response.json(productos)
  }catch (error){
    response.json({
    menssage:`no se puede mostrar $(error)`,
  })
}
};

const mostrarProducto = async (request, response) => {
try {
  const producto =await Producto.findOne({where: {id: request.params.id}})
  response.json(producto)
} catch (error) {
  response.json({
    menssage:`producto no existe en la base de datos:`+ error,
  })
}


};



const editarProducto = async (request, response) => {

};


const eliminarProducto = async (request, response) => {

};



export {
  crearProducto,
  mostrarProductos,
  mostrarProducto,
  editarProducto,
  eliminarProducto,
};
