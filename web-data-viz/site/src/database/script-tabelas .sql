create database vibrantEnergy;
use vibrantEnergy;




create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(60) unique,
senha varchar(16))
auto_increment=1;

create table ranking (
idRanking int primary key auto_increment  ,
pontuacao int,
dataTentativa date, 
tipoUsuario varchar(45),
fkUsuario int unique, constraint fkUsuario foreign key (fkUsuario)
references usuario(idUsuario));

show INDEX from ranking;
select * from ranking;

delete from ranking where idRanking = 8;

create table recomendacao (
idRecomendacao int auto_increment,
nomeMusica varchar(45),
bandaCantor varchar(45),
fkUsuario int ,
primary key (idRecomendacao, fkUsuario),
 constraint fkUsuario2 foreign key (fkUsuario)
references usuario(idUsuario))
auto_increment= 1000;

select * from usuario;
select * from ranking;
select * from recomendacao;

select * from usuario 
join ranking on idUsuario=fkUsuario;

select * from usuario 
join recomendacao on idUsuario=fkUsuario;

select * from usuario;

delete from usuario where idUsuario=9;



select ranking.pontuacao,ranking.dataTentativa, count(distinct(usuario.nome)) from ranking inner join usuario on idUsuario=fkUsuario
group by ranking.idRanking
 order by pontuacao desc limit 10 ;



