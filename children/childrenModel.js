const db = require("../data/dbConfig");

module.exports = {
  findChildren,
  findChildrenbyId,
  addChild,
  updateChild,
  deleteChild
};

function findChildren() {
  return db("children")
    .join("users", "children.parent_id", "users.id")
    .select(
      "id",
      "parent_id",
      "chore_id",
      "child_username",
      "child_password",
      "messages",
      "chore_streak",
      "chore_score",
      "bonus_points",
      "role"
    );
}

function findChildrenbyId(id) {
  return db("children")
    .join("users", "children.parent_id", "users.id")
    .select(
      "id",
      "parent_id",
      "chore_id",
      "child_username",
      "child_password",
      "messages",
      "chore_streak",
      "chore_score",
      "bonus_points",
      "role"
    )
    .where({ id });
}

async function addChild(child) {
  const [id] = await db("children").insert(child, "id");
  return findChildrenbyId(id);
}

async function updateChild(child) {
  await db("children")
    .update(chore)
    .where({ id: child.id });
}

async function deleteChild(child) {
  await db("children")
    .del(child)
    .where({ id: child.id });
}
