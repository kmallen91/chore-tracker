const request = require("supertest");
const server = require("./server.js");

describe("server", function() {
  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON formatted response", function() {
      return request(server)
        .get("/users")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});

describe("server", () => {
  describe("auth route", () => {
    it("should respond with a 201 and a response", () => {
      const newUser = {
        username: Date.now(),
        email: Date.now(),
        password: Date.now()
      };
      return request(server)
        .post("/users/register")
        .send(newUser)
        .then(res => {
          expect(201);
          expect(res);
        });
    });
  });
});
