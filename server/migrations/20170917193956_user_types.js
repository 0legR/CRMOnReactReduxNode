
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_types', function(table) {
  	table.integer('id').notNullable().unique();
  	table.string('typename').notNullable().unique();
  	table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_types');
};
