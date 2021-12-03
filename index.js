const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connect = require('./databases/databases');;
const Protudos = require('./databases/Cadastro');

//config DB
connect.authenticate().then(()=>{
    console.log(":D");
}).catch((err) =>{
    console.log("erro");
})

//config EJS
app.set('view engine', 'EJS');
app.use(express.static('public'));

//config Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//rotas
app.get('/home', (req, res) => {
    res.render("home");
});
//Buscando os itens no banco
app.get('/lista', (req, res) => {
    //ordernação do  menor para o maior
    Protudos.findAll({raw: true, order:[
        ['valor','ASC']
    ]}).then(protudos =>{
        res.render("lista", {
            protudos: protudos
        });
    });
});

//Salvando os dados do formulario do Front-End
app.post('/save', (req, res) => {

    var protudo = req.body.produto;
    var valor = req.body.valor;
    var descricao = req.body.descricao;
    var disponivel = req.body.disponivel;

    Protudos.create({
        protudos: protudo,
        descricao: descricao,
        valor: valor,
        disponivel: disponivel
    }).then(() =>{
        res.redirect("/lista");
    });
});

//inciando servidor
app.listen(8182, function() {
    console.log('iniciado');
})