
exports.up = function(knex) {
    return knex.schema.createTable('TB_USUARIOS_PERFIS', table => {
        table.real('NOTA').notNull()
        table.integer('PERIODO').notNull()
        table.integer('TB_ALUNOS_ID').unsigned()
        table.integer('TB_DISCIPLINAS_ID').unsigned()
        table.foreign('TB_ALUNOS_ID').references('TB_ALUNOS.ID')
        table.foreign('TB_DISCIPLINAS_ID').references('TB_DISCIPLINAS.ID')
        table.primary(['TB_ALUNOS_ID', 'TB_DISCIPLINAS_ID'])
    }) 
    
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_ALUNO_DISCIPLINA')
};
