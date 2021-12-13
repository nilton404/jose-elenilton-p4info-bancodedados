const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database/avaliacao04.db', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run('create table if not exists TB_ALUNOS (ID integer primary key autoincrement , NOME_ALUNO text)', (error) => {
        if (error) console.log(error);
    });
    db.run('create table if not exists TB_DISCIPLINAS (ID integer primary key autoincrement , NOME_DISCIPLINA text)', (error) => {
        if (error) console.log(error);
    });
    db.run('create table if not exists TB_ALUNO_DISCIPLINA (NOTA real, PERIODO integer, TB_ALUNOS_ID integer, TB_DISCIPLINAS_ID integer, foreign key(TB_ALUNOS_ID) references TB_ALUNOS(ID), foreign key (TB_DISCIPLINAS_ID) references TB_DISCIPLINAS(ID), primary key("TB_ALUNOS_ID","TB_D  ISCIPLINAS_ID"))', (error) => {
        if (error) console.log(error);
    });
});