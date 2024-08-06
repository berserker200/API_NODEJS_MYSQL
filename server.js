const express = require('express')
const mysql = require("mysql2")
const myconn = require("express-myconnection")
const routes = require('./routes')

const app = express()
app.set('port',process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost', 
    port: 3306,
    user: 'root',  
    password: '12345', 
    database: 'chatbot',
}

//Conexion con la base de datos
app.use(myconn(mysql,dbOptions,'single',function(err) {
	if (err) {
		console.error('Error en la conexion: ' + err.stack);
	return;
  }

	  console.log('conexion exitosa a la BD ID: ' + myconn.threadId);
}))
app.use(express.json())
// ruta por defecto -------------------------------------------------
app.get('/',(req,res)=>{
    res.send('Bienvenido a nuestra API transaccional')
})
app.use('/api',routes)

// Inicializa el servidor --------------------------------
app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en http://localhost:9000/',app.get('port'))
})