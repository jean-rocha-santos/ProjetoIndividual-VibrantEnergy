create database vibrantEnergy;
use vibrantEnergy;


create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(60) unique,
senha varchar(16))
auto_increment=1;

create table ranking (
idRanking int primary key auto_increment ,
pontuacao int,
fkUsuario int, constraint fkUsuario foreign key (fkUsuario)
references usuario(idUsuario));


create table recomendacao (
idRecomendacao int primary key auto_increment,
nomeMusica varchar(45),
bandaCantor varchar(45),
fkUsuario int , constraint fkUsuario2 foreign key (fkUsuario)
references usuario(idUsuario));

select * from usuario;
select * from ranking;
select * from recomendacao;

select * from usuario 
join ranking on idUsuario=fkUsuario;

select * from usuario 
join recomendacao on idUsuario=fkUsuario;

select * from usuario
join recomendacao on idUsuario=fkUsuario 
join ranking on idUsuario=ranking.fkUsuario;




