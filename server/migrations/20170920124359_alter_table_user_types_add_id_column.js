
exports.up = function(knex, Promise) {
  return knex.schema.table('user_types', function(table) {
  	table.increments('id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user_types', function(table) {
  	table.dropColumn('id');
  });
};
