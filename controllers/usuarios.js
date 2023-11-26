const { response, request } =require('express')


/////////////// Get ///////////////////////////
const usuariosGet = (req, res=response) => { 
    // el postman http://localhost:8081/api/usuarios?q=hola&limit=10&nombre=maria
    // en el Get despues ? es opcional se trabaja asi   
    const {q, nombre='no name', apikey, page=1, limit} =req.query;
    res.json({
     msg: 'Get Api - controlador',
     q,
     nombre,
     apikey,
     page,
     limit

    });
 }

/////////////// Post ///////////////////////////
const usuariosPost = (req, res=response) => {   

// const body= req.body; // lo que viene del body se recibe con req
const {nombre, edad}= req.body;

   res.json({
     ok: true,
     msg: 'Post Api - controlador',
     //body
     nombre , edad
    });
}
/////////////// Put ///////////////////////////
const usuariosPut = (req, res=response) => {   
    const {id}  = req.params ; // params para tomar al id 
    res.json({
     ok: true,
     msg: 'Put Api - controlador',
     id

    });
}
/////////////// Patch ///////////////////////////
const usuariosPatch = (req, res=response) => {   
    res.json({
     ok: true,
     msg: 'Patch Api - controlador'
    });
}
/////////////// Delete ///////////////////////////
const usuariosDelete = (req, res=response) => {   
    res.json({
     ok: true,
     msg: 'Delete Api - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,

}