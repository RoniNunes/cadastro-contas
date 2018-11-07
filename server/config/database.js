const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cadastro-contas',{
}).then(()=>{
        console.log("Conexão foi satisfatoria Puerto 8092");
    }).catch((err)=>{
        console.log(`ocorreu um erro em conectar com banco de dados: ${err}`)  ;
    });
mongoose.Promise = global.Promise;

module.exports = mongoose;
