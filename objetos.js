// const alunos = ["Leo", "Douglas", "Ana"];

// const pessoa = {
//   nome: "Julio",
//   idade: 28,
//   genero: "Masculino",
// };

// const produto = [
//   { 
//     id: 1,
//     img: "linkdaimagem",
//     descricao: "descricaoprod",
//     nomeProd: "nomedoproduto",
//     categotia: "categotidoproduto",
//     preco: "valordoproduto",
//     desconto: "true",
//   },
//   {
//     id: 2,
//     img: "linkdaimagem",
//     descricao: "descricaoprod",
//     nomeProd: "nomedoproduto",
//     categotia: "categotidoproduto",
//     preco: "valordoproduto",
//     desconto: "true",
//   },

//   {
//     id: 3,
//     img: "linkdaimagem",
//     descricao: "descricaoprod",
//     nomeProd: "nomedoproduto",
//     categotia: "categotidoproduto",
//     preco: "valordoproduto",
//     desconto: "true",
//   },

//   {
//     id: 4,
//     img: "linkdaimagem",
//     descricao: "descricaoprod",
//     nomeProd: "nomedoproduto",
//     categotia: "categotidoproduto",
//     preco: "valordoproduto",
//     desconto: "true",
//   },
// ];
// console.log(produto[0].id)

//1.Crie um objeto chamado livro com as propriedades: titulo, autor, ano. 
//Acesse e imprima o autor do livro. Modifique o ano do livro para 2023. Adicione uma nova propriedade editora.

// const livro = {
   
//     livro: 'A Marca de Uma Lágrima',
//     autor: 'Pedro Bandeira',
//     ano: 2001,
// }

// console.log(livro.autor)

// console.log(livro.ano = '2023')

// console.log(livro.editora = 'Moderna; 4ª edição')

//2. Dado o array abaixo, crie um laço que percorre os objetos e imprime o nome de cada aluno:
//  const alunos = [
    //{ nome: "João", nota: 8 },
    //{ nome: "Maria", nota: 9 },
    //{ nome: "Pedro", nota: 7 }

    // const alunos = [
    //     {
    //         id: 1,
    //         nome: 'Beatriz',
    //         nota: 10
    //     },

    //     {
    //         id: 2,
    //         nome: 'Thalita',
    //         nota: 9

    //     },

    //     {
    //         id: 3,
    //         nome: 'Malu',
    //         nota: 10
    //     },

    //     {
    //         id: 4,
    //         nome: 'Helena',
    //         nota: 9

    //     },

    //     {
    //         id: 5,
    //         nome: 'Analu',
    //         nota:8
    //     },

    //     {
    //         id: 6,
    //         nome: 'Alice',
    //         nota: 10
    //     }
    // ]

    // for (let i = 0; i < alunos.length; i++) {
    //     console.log(alunos[i].nome);
    // }
//3. Crie uma função que recebe um array de objetos de produtos e retorna a **soma total dos preços**:
    
 const produtos = [
    { nome: "Camiseta", preco: 30 },
    { nome: "Calça", preco: 80 },
    { nome: "Boné", preco: 20 }
    ];
    
function totalPreco (array) {
    for (let i = 0; i < array.length; i++) {
        soma += array[i].preco
    }

    return soma
}
console.log(totalPreco(produtos))