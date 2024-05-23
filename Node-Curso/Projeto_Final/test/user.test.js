let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

let mainUser = {
  name: "Guilherme",
  email: "guilherme@example.com",
  password: "123456",
};

beforeAll(() => {
  //Ocorre antes dos testes
  return request
    .post("/user")
    .send(mainUser)
    .then((res) => {})
    .catch((err) => {console.log(err)});
});

afterAll(() => {
  return request.delete(`/user/${mainUser.email}`).then((res) => {
  }).catch((err) => {console.log(err)});
});

beforeAll(() => {
  //Ocorre durante os testes, a cada teste
});

describe("Cadastro de usuário", () => {
  test("Deve cadastrar um usuário com sucesso", () => {
    let time = Date.now();
    let email = `${time}@gmail.com`;

    let user = { name: "Guilherme", email, password: "123456" };

    return request
      .post("/user")
      .send(user)
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(email);
      })
      .catch((err) => {
        fail(err);
      });
  });

  test("Deve impedir que usuário se cadastre com dados vazios", () => {
    let time = Date.now();
    let email = `${time}@gmail.com`;

    let user = { name: "Guilherme", email, password: "123456" };

    return request
      .post("/user")
      .send(user)
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(email);

        request
          .post("/user")
          .send(user)
          .then((res) => {
            expect(res.statusCode).toEqual(400);
            expect(res.body.error).toEqual("Email ja cadastrado!");
          })
          .catch((err) => {
            fail(err);
          });
      })
      .catch((err) => {
        fail(err);
      });
  });

  test("", () => {});
});


describe("Autenticação", () => {
    test("Deve me retornar um token quando logar", () => {
       return request.post("/auth").send({email: mainUser.email, password: mainUser.password}).then((res) => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.token).toBeDefined();
        }).catch((err) => {
            fail(err);
        })
    })


    test("Deve impedir que o usuário não cadastrado consiga logar", () => {
        return request.post("/auth").send({email: "testetestando@gbmail.com", password: "9899817"}).then((res) => {
            expect(res.statusCode).toEqual(403);
            expect(res.body.errors.email).toEqual("Email invalido");
        }).catch((err) => {
            fail(err);
        })
    })

    test("Deve impedir que o usario logue com a senha errada", () => {
        return request.post("/auth").send({email: "guilherme@example.com", password: "989983131"}).then((res) => {
            expect(res.statusCode).toEqual(403);
            expect(res.body.errors.password).toEqual("Senha invalido");
        }).catch((err) => {
            fail(err);
        })
    })
})