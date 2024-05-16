class Filme {
  constructor(titulo, ano, genero, diretor,  duracao) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.diretor = diretor;
    this.duracao = duracao;
    this.atores = [];
  }

  //Static permite que o metodo seja acessado sem instanciar um objeto da classe
  static Reproduzir() {
    console.log("Reproduzindo...");
  }

  Pausar() {
    console.log("Pausando ||");
  }

  Avancar() {
    console.log("Avancando >>");
  }

  Fechar() {
    console.log("Finalizando X");
  }

  Ficha(){
    console.log("Titulo: "+this.titulo); 
    console.log("Ano: "+this.ano);
    console.log("Genero: "+this.genero);
    console.log("Diretor: "+this.diretor);
    console.log("Duração: "+this.duracao);
  }

}

let vingadores = new Filme();
/*vingadores.genero = "Ação";
vingadores.titulo = "Vingadores";
vingadores.ano = 2021;*/

vingadores.Avancar();

let hulk = new Filme();
hulk.genero = "Ação";
hulk.titulo = "Hulk";
hulk.ano = 2022;

hulk.Fechar();

let starwars = new Filme();
starwars.genero = "Ação";
starwars.titulo = "Star Wars";
starwars.ano = 1977;

starwars.Pausar();
