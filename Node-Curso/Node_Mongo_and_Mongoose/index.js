const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/aprendendoMongo");

console.log("Conectado ao mongoDB");

const Article = mongoose.model("Article", articleModel);

Article.findByIdAndUpdate("664ca9211ee8de1c01cc1320", {
  title: "Vue do zero",
  author: "Guilherme",
})
  .then(() => {
    console.log("Artigo atualizado");
  })
  .catch((err) => {
    console.log(err);
  });

/*
Article.findByIdAndDelete('664ca777f1bdcb8432adba61').then((article) => {
    console.log("Artigo deletado: " + article.title);
}).catch((err) => {
    console.log(err);
})
*/

/*
Article.find({'author':'Beatriz', 'title':'Novo artigo 3'}).then((article) => {
    console.log(article);
}).catch((err) => {
    console.log(err);
})
*/

/*
Article.find({'_id':'664ca777f1bdcb8432adba61'}).then((article) => {
    console.log(article);
}).catch((err) => {
    console.log(err);
})

*/

/*
Article.find({}).then((articles) => {
    console.log(articles);
}).catch((err) => {
    console.log(err);
});

*/

/*Cadastro
const artigo = new Article({
  title: "Novo artigo 3",
  author: "Beatriz",
  body: "Conteudo do artigo",
  special: true,
  resume: {
    content: "Resumo do artigo",
    author: "Guilherme",
  },
});

artigo.save().then(() => {
  console.log("Artigo salvo");
}).catch((err) => {
  console.log(err);
});
*/
