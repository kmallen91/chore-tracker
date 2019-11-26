exports.up = function(knex) {
  return knex.schema.createTable("chores", table => {
    table.increments();
    table.string("name", 128).notNullable();
    table.date("due_date", 56);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.boolean("completed").defaultTo(false);
    table.integer("points");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("chores");
};
