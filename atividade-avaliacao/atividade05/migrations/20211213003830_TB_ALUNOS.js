
exports.up = function(knex) {
    return knex.schema.createTable('TB_ALUNOS', table => {
        table.increments('ID').primary()
        table.string('NOME_ALUNO').notNull()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_ALUNOS')
};
