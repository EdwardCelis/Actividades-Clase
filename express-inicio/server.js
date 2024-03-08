const express = require ('express');
const app = express();

app.post('/message',(req,res)=>{
    const message = req.body.message;
    console.log(message);
    res.send('OK');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});