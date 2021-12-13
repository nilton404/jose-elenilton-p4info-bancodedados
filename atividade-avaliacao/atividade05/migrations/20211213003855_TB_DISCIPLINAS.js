
exports.up = function(knex) {
    return knex.schema.createTable('TB_DISCIPLINAS', table => {
        table.increments('ID').primary()
        table.string('NOME_DISCIPLINA').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_DISCIPLINAS')
};
