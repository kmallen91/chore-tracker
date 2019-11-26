const db = require("../data/dbConfig");

module.exports = {
  addChore,
  find,
  update,
  deleteChore,
  findById
};

function find() {
  return db("chores").select(
    "id",
    "name",
    "due_date",
    "completed",
    "created_at"
  );
}

function findById(id) {
  return db("chores")
    .select("id", "name", "due_date", "completed", "created_at")
    .where({ id })
    .first();
}

async function addChore(chore) {
  const [id] = await db("chores").insert(chore, "id");
  return findById(id);
}

async function update(chore) {
  await db("chores")
    .update(chore)
    .where({ id: chore.id });
}

async function deleteChore(chore) {
  return db("chores")
    .del()
    .where({ id: chore.id });
}
