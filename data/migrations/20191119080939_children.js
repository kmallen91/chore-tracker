exports.up = function(knex) {
  return knex.schema.createTable("children", table => {
    table.increments("child_id");
    table
      .integer("parent_id", 128)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
<<<<<<< HEAD
    table.string("chores", 128);
=======
    table
      .integer("chore_id", 128)
      .unsigned()
      .references("id")
      .inTable("chores")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
>>>>>>> 64f42bd822bf08cf01509defe6ca8fb7fb2ac165
    table.string("child_username", 256).notNullable();
    table.string("child_password", 256);
    table.string("messages", 1024);
    table.integer("chore_score");
    table.integer("chore_streak");
    table.integer("bonus_points");
    table.string("role", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("children");
};
