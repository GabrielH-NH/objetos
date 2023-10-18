
const dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor)
  },
  ativar() {
    this.element().classList.add('ativo')
  }
}

dom.seletor = 'ul'
dom.ativar()
dom.seletor = 'li'
dom.ativar()



function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  }
  this.ativar = function () {
    this.element().classList.add('Ativar')
  }
}

const li = new Dom('li')
const ul = new Dom('ul')
ul.ativar()
const lastLi = new Dom('li:last-child');
lastLi.ativar()


function Pessoa2(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return console.log(this.nome + ' andou')
  }
}

const pessoa = new Pessoa2('Carlos', 24);
pessoa.andar()

function Pessoas(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoa0 = new Pessoas('João', 20)
const pessoa1 = new Pessoas('Maria', 25)
const pessoa3 = new Pessoas('Bruno', 15)


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


