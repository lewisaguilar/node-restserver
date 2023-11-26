const express = require('express')
const cors = require('cors')


class Server  {
   constructor() {
      this.app  = express();
      this.port = process.env.PORT;
      this.usuarioPath = '/api/usuarios'

       // Middlewares
       this.middlewares();
      
      // Rutas de mi aplicación
      this.routes();
  }

  middlewares() {
      /* nos permite proteger nuestro servidor de una manera 
        superficial -- pero muchos navegadores web le va dar error
        si no va estar habilitado y piensa llamar api--> 
        instalarlo -->  npm i cors   */ 
      this.app.use(cors())   

      //Lectura y parseo desde el body put, delete, post 
      this.app.use(express.json());
     
      // Directorio Público
      this.app.use( express.static('public') );

   }
   routes() {
       this.app.use(this.usuarioPath , require('../routes/usuarios'))
   }
  listen() {
       this.app.listen( this.port , ()=> {
       console.log ( 'Servidor corriendo en el puerto', this.port );   
       });
    } 
 }
module.exports = Server; 