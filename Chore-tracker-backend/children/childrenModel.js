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
      "children.child_id",
      "children.parent_id",
      "children.chores",
      "children.child_username",
      "children.child_password",
      "children.messages",
      "children.chore_streak",
      "children.chore_score",
      "children.bonus_points",
      "children.role"
    );
}

function findChildrenbyId(child_id) {
  return db("children")
    .join("users", "children.parent_id", "users.id")
    .select(
      "children.child_id",
      "children.parent_id",
      "children.chores",
      "children.child_username",
      "children.child_password",
      "children.messages",
      "children.chore_streak",
      "children.chore_score",
      "children.bonus_points",
      "children.role"
    )
    .where({ child_id });
}

async function addChild(child) {
  const [id] = await db("children").insert(child, "child_id");
  return findChildrenbyId(id);
}

async function updateChild(child) {
  await db("children").update(child);
  // .where({ child_id: child.child_id });
}

function deleteChild(child) {
  return db("children")
    .del()
    .where({ child_id: child });
}
