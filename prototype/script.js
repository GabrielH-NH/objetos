function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const gabriel = new Pessoa('Gabriel', 24)

console.log(Pessoa.prototype)

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
  return this.nome +' '+ this.sobrenome
}

const gabriel1 = new Pessoas('Gabriel', 'Henrique', 24)
const joao = new Pessoas('Joao', 'Alberto', 33)


const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();


li.hidden.constructor.name;