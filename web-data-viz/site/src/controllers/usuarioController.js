var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json(resultadoAutenticar[0])

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // var confirmSenha = req.body.confirmacaoSenhaServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
        // } else if (email == undefined) {
        //     res.status(400).send("Seu email está undefined!");
        // } else if (senha == undefined) {
        //     res.status(400).send("Sua senha está undefined!");
        // // } else if (empresaId == undefined) {
        // //     res.status(400).send("Sua empresa está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    )
                    if(erro.sqlMessage==`Duplicate entry '${email}' for key 'usuario.email'`){
                        res.status(400).json(erro.sqlMessage);
                    }else {
                    res.status(500).json(erro.sqlMessage);}
                }
            );
    }
}
function jogoEncerrado(req,res){
    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var dataAtual = req.body.dataAtualServer;
    usuarioModel.jogoEncerrado( pontuacao, fkUsuario, dataAtual)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    )
                    if(erro.sqlMessage==`Duplicate entry '${email}' for key 'usuario.email'`){
                        res.status(400).json(erro.sqlMessage);
                    }else {
                    res.status(500).json(erro.sqlMessage);}
                }
            );

}
function mostrarRanking(req,res){
    usuarioModel.mostrarRanking()
    .then(function(resultado){
        if (resultado.length > 0 ){
            res.status(200).json(resultado)
        }else {
            res.status(204).send("nenhum resultado encontrado")
        }
    }).catch(
        function(erro) {
            console.log(erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        }
    )
}
function recomendar(req,res){
    var nomeMusica = req.body.nomeMusicaServer;
    var nomeBandaCantor = req.body.nomeBandaCantorServer;
    var fkUsuario = req.body.fkUsuarioServer;
    usuarioModel.recomendar(nomeMusica, nomeBandaCantor,fkUsuario)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            )
            if(erro.sqlMessage==`Duplicate entry '${email}' for key 'usuario.email'`){
                res.status(400).json(erro.sqlMessage);
            }else {
            res.status(500).json(erro.sqlMessage);}
        }
    );
    
}
function musicaRecomendada(req,res){
    usuarioModel.musicaRecomendada()
    .then(function(resultado){
        if (resultado.length > 0 ){
            res.status(200).json(resultado)
        }else {
            res.status(204).send("nenhum resultado encontrado")
        }
    }).catch(
        function(erro) {
            console.log(erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        }
    )
}
module.exports = {
    autenticar,
    cadastrar,
    jogoEncerrado,
    mostrarRanking,
    recomendar,
    musicaRecomendada
}