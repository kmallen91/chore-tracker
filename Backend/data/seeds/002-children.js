exports.seed = function(knex) {
  return knex("children").insert([
    {
      parent_id: 1,
      chore_id: 1,
      child_username: "Joey",
      messages: "Do your chores!",
      chore_score: 10,
      chore_streak: 0,
      role: "child"
    },
    {
      parent_id: 1,
      chore_id: 1,
      child_username: "Billy",
      messages: "keep up the good work",
      chore_score: 20,
      chore_streak: 5,
      role: "child"
    }
  ]);
};
