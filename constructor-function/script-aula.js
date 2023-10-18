// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

const carro = {
  marca: 'Marca',
  preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 3000;

const fiat = carro;
fiat.marca = 'fiat';
fiat.preco = 4000;

/* carro, fiat e honda apontam para o mesmo objeto. */


//CONSTRUCTOR FUNCTIONS
//Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

/* Usar Pascal Case, ou seja, começar com letra maiúscula */



// NEW KEYWORD
// A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}



// PARÂMETROS E ARGUMENTOS
// Podemos passar argumentos que serão utilizados no momento da criação do objeto

function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro('honda', 4000)
const fiat = new Carro('Fiat', 3000);



// THIS KEYWORD
// O this faz referência ao próprio objeto construído com a Constructor Function.

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda2 = new Carro2('Honda', 2000);

/* Variáveis dentro da Constructor estão "protegidas" */



// EXEMPLO REAL
// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add('ativo');
  },
}

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo(); // adiciona ativo ao ul




// CONSTRUCTOR FUNCTION REAL
// Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.

function Dom2() {
  this.seletor = 'li';
  const element = document.querySelector(this.seletor);
  this.ativo = function() {
    element.classList.add('ativo');
  };
}

const lista = new Dom2();
lista.seletor = 'ul';
lista.ativo();

const lastLi = new Dom2();
lastLi.seletor = 'li:last-child';
lastLi.ativo();



// USAR PARÂMETROS

function Dom3(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function(classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom3('ul');
lista.ativo('ativo');

const lastLi = new Dom3('li:last-child');
lastLi.ativo('ativo');




// EXERCICIOS

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa2(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + ' andou')
  }
}

const pessoa2 = new Pessoa2('Carlos', 24)
pessoa.andar()

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

function Pessoas(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoa0 = new Pessoas('João', 20)
const pessoa1 = new Pessoas('Maria', 25)
const pessoa3 = new Pessoas('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom4(seletor) {
  const elementList = document.querySelectorAll(seletor)
  this.elements = elementList;
  this.adicionar = function() {
    this.elements.forEach((item) => {
      item.classList.add('ativo')
    })
  },
  
  this.remover = function() {
    this.elements.forEach((item) => {
      item.classList.remove('ativo')
    })
  }
}

const listLis = new Dom4('li')
listLis.adicionar()










