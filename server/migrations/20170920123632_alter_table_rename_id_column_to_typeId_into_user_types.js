
exports.up = function(knex, Promise) {
  return knex.schema.table('user_types', function(table) {
  	table.renameColumn('id', 'typeId');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user_types', function(table) {
  	table.renameColumn('typeId', 'id');
  });
};
