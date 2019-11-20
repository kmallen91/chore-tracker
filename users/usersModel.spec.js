const { add, find, findBy, findById } = require("./userModel");
const db = require("../data/dbConfig");

describe("user model", function() {
  describe("register", function() {
    beforeEach(async () => {
      await db("users").truncate;
    });
    it("should register a user", async function() {
      await add({ username: "tester3", password: "tester3" });
      const user = await db("users");
      expect(user).toHaveLength(1);
    });
  });
});
