// EXERCICIOS
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
  
  let somaTaxa = 0;
  let somaRecebimento = 0;

  transacoes.forEach((item) => {
    let numeroLimpo = +item.valor.replace('R$ ', '')
    
    if(item.descricao.slice(0, 4) === 'Taxa') {
      somaTaxa += numeroLimpo
    } else {
      somaRecebimento += numeroLimpo
    }
    
    
  })
  
  console.log(`A soma das taxas é ${somaTaxa}`)
  console.log(`A soma do recebimento é ${somaRecebimento}`)


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const array = transportes.split(';')
console.log(array)

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlNovo = html.replace(/[span]+/g, 'a')
console.log(htmlNovo)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const ultimo = frase[frase.length - 1]
console.log(ultimo)

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;

transacoes2.forEach((item) => {
  item = item.toLowerCase().trim().slice(0, 4)

  if(item === 'taxa') {
    totalTaxas++
  }
})

console.log(totalTaxas)

