const express = require('express')
const routes = express.Router()

// Lista todos los registros
routes.get('/',(req,res)=>{
    //res.send('Probando API')
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM reg_chatbot',(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

// Insertar registros
routes.post('/',(req,res)=>{
    //res.send('Probando API')
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('INSERT INTO reg_chatbot SET ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)
            res.send('Registo insertado.')
        })
    })
})

// Elimina registros
routes.delete('/:id',(req,res)=>{
    //res.send('Probando API')
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('DELETE FROM reg_chatbot WHERE id = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('Registo eliminado.')
        })
    })
})

// Actualiza registros
routes.put('/:id',(req,res)=>{
    //res.send('Probando API')
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
        conn.query('UPDATE reg_chatbot SET ? WHERE id = ?',[req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('Registo actualizado.')
        })
    })
})
module.exports = routes