var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, email  FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function jogoEncerrado(pontuacao,fkUsuario, dataAtual) {
    var instrucao = `
    INSERT INTO ranking (pontuacao, fkUsuario,dataTentativa) VALUES (${pontuacao},${fkUsuario},'${dataAtual}');
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function mostrarRanking(){
    var instrucao=`
    select ranking.pontuacao,DATE_FORMAT(ranking.dataTentativa, '%d %m %y') as dataTentativa, usuario.nome from ranking inner join usuario on idUsuario=fkUsuario group by ranking.idRanking order by pontuacao desc limit 10 ;`;
    return database.executar(instrucao);
}
function recomendar(nomeMusica, nomeBandaCantor, fkUsuario){
    var instrucao=`
    insert into recomendacao (nomeMusica, bandaCantor, fkUsuario) values ('${nomeMusica}','${nomeBandaCantor}', ${fkUsuario})`
    return database.executar(instrucao);
}
function musicaRecomendada(){
    var instrucao= `
    select recomendacao.nomeMusica, recomendacao.bandaCantor, usuario.nome from recomendacao inner join usuario on fkUsuario=idUsuario;`
    return database.executar(instrucao);
}
module.exports = {
    autenticar,
    cadastrar,
    jogoEncerrado,
    mostrarRanking,
    recomendar,
    musicaRecomendada
};