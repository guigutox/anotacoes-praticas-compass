let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3131", () => {
  request
    .get("/")
    .then((response) => {
      let status = response.statusCode;
      expect(status).toEqual(200);
    })
    .catch((err) => {
      fail(err);
    });
});
