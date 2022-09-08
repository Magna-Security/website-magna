-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database magna;
use magna;

create table Empresa (
	idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(50),
    CNPJ char(14),
    telefone varchar(20)
);


create table Usuario (
	idUsuario int primary key auto_increment,
    fkEmpresa int,
    foreign key (fkEmpresa) references Empresa(idEmpresa),
    nomeUsuario varchar(50),
    email varchar(50),
    senha varchar(50),
    primeiroAcesso boolean,
    tipoUsuario varchar(50),
    constraint chkTipoUsuario check (tipoUsuario = "manager" or tipoUsuario = "gerente" or tipoUsuario = "suporte")
);

create table Servidor (
	idServidor int primary key auto_increment,
    fkEmpresa int,
    foreign key (fkEmpresa) references Empresa(idEmpresa),
    armazenamento int,
    nucleos int,
    threads int,
    ram double,
    fonte int
);

create table Aplicacao (
	idAplicacao int primary key auto_increment,
    preco double,
    fkServidor int,
    foreign key (fkServidor) references Servidor(idServidor)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);


/* para sql server - remoto - produção */
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);
