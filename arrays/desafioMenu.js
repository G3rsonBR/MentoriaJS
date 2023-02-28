/* Primeira parte do Exercício */
let menu = [
  {
    nome: "X-Bacon",
    ingredientes: "Pão, Hamburguer, Cebola, Alface, Queijo, Bacon",
    preco: "25",
    tipo: "Carne Bovina",
  },
  {
    nome: "X-Salada",
    ingredientes: "Pão, Hamburguer, Cebola, Alface, Queijo, Tomate",
    preco: "25",
    tipo: "Carne Bovina",
  },
  {
    nome: "X-Burguer",
    ingredientes: "Pão, Hamburguer, Alface, Queijo",
    preco: "20",
    tipo: "Carne Bovina",
  },
];

console.log("Veja nossos Lanches no menu abaixo:\n");
menu.forEach((element) => {
  console.log(
    `Nome: ${element.nome}\nIngredientes: ${element.ingredientes}\nPreço: ${element.preco}`
  );
  console.log("---------------------\n");
});

/* Segunda Parte do Exercício */
const pedidos = [
  {
    ...menu[0],
    quantidade: 5,
  },
  {
    ...menu[2],
    quantidade: 1,
  },
];

// Daqui para baixo foi uma cópia APENAS para ficar bonito no console. Foi mudado algumas coisas para funcionar.
let valorTotal = 0;

const headers = ["Nome do Item", "Quantidade", "Vl. Un", "Valor Total"];
const formattedHeaders = headers.join("  |  ");
let totalText = "V. total";

// Isso é 100% frufru, pode desconsiderar
function formatTotalTextFrufru() {
  let lineLength =
    formattedHeaders.length - headers[3].length - totalText.length;

  for (let index = 0; index <= lineLength; index++) {
    totalText += " ";
  }
}

console.log("Nota Fiscal\n");

console.log(formattedHeaders);
pedidos.forEach((itemDoPedido) => {
  const valorTotalItem = itemDoPedido.quantidade * itemDoPedido.preco;

  valorTotal += valorTotalItem;
  let text = `${itemDoPedido.nome.substring(0, 7)}       |        ${
    itemDoPedido.quantidade
  }     |    ${itemDoPedido.preco}    |   R$ ${valorTotalItem} `;
  console.log(text);
});
// console.table(pedidos)
formatTotalTextFrufru();

totalText += `R$ ${valorTotal}\n`;

console.log(totalText);

/* Terceira Parte do Exercícios */
menu.push(
  {
    nome: "X-Frango",
    ingredientes: "Pão, Frango, Salada, Tomate, Queijo",
    preco: 20,
    tipo: "Carne Não Bovina",
  },
  {
    nome: "X-Vegano",
    ingredientes:
      "Pão, Hamburguer de Brócolis e Cogumelo, Salada, Tomate, Queijo de Batata",
    preco: 28,
    tipo: "Carne Não Bovina",
  }
);

let filtrados = menu.filter((element) => element.tipo == "Carne Não Bovina");
console.log("Lanches sem Carne Bovina:");
filtrados.forEach((element) => {
  console.log(
    `Nome: ${element.nome}\nIngredientes: ${element.ingredientes}\nPreço: ${element.preco}`
  );
  console.log("---------------------\n");
});
