exports.up = function(knex) {
  return knex.schema.createTable("child-chores", table => {
    table.increments();
    table
      .integer("child_id")
      .unsigned()
      .references("child_id")
      .inTable("children")
      .onDelete("CASCADE");
    table
      .integer("chore_id")
      .unsigned()
      .references("id")
      .inTable("chores")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("child-chores");
};
