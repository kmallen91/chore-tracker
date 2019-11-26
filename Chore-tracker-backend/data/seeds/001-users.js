exports.seed = function(knex) {
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      {
        username: "test1",
        password: "test1",
        email: "test1@test.com",
        family_password: "test1"
      },
      {
        username: "test2",
        password: "test2",
        email: "test2@test.com",
        family_password: "test2"
      },
      {
        username: "test3",
        password: "test3",
        email: "test3@test.com",
        family_password: "test2"
      }
    ]);
  });
};
