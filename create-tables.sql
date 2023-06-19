/** 
    MYSQL id integer auto_increment primary key,
    POSTGRES id serial primary key
*/

CREATE TABLE aluno (
	id integer auto_increment primary key,
    nome varchar(100),
    matricula varchar(20) unique,
    data_nascimento date,
    pontuacao integer
);

CREATE TABLE atividade (
	id integer auto_increment primary key,
    aluno_id integer,
    nome varchar(100),
    disciplina varchar(100),
    nota decimal(10,2),
    observacao varchar(255),
	FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);

INSERT INTO aluno VALUES
(default, 'Leuri', '2021A001', '2005-09-26', 0),
(default, 'Smith', '2021A002', '1999-04-24', 0),
(default, 'Zome', '2021A003', '1985-02-01', 0),
(default, 'Silva', '2021A004', '2001-05-17', 0);