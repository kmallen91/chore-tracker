exports.up = function(knex) {
  knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("username", 128)
      .unique()
      .notNullable();
    table.string("password", 128).notNullable();
    table.string("first_name", 128);
    table.string("last_name", 128);
    table.string("email", 256);
    table.string("family_password", 128);
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("users");
};
