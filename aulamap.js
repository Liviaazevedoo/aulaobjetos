const tabelaItens = document.getElementById("tabela-produtos")

const produtos = [
{
    img:"https://acdn-us.mitiendanube.com/stores/004/276/178/products/732f1981e311f9825d85300c42a3a8de-d01c802a36349b5d8e17150358770438-640-0.jpg",
    nome: "Camiseta",
    preco: 49.99,
    frete:true
},

{
    img: "https://converse.com.br/media/catalog/product/a/0/a09429c_k_08x1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=",
    nome: "Tênis",
    preco: 189.90 ,
    frete: false

},
{
    img: "https://down-br.img.susercontent.com/file/sg-11134201-7rdvk-lyp2n9ps4b3g7f",
    nome: "Calça Jeans",
    preco: 89.99 ,
    frete: true
}
]
tabelaItens.innerHTML = produtos.map((produto)=>{
    return `
        <tr class="border-t border-gray-200 hover:bg-gray-200">
            <td><img class="w-20 p-2" src=${produto.img} alt="${produto.desc}"></td>
            <td></td>
            <td>R$89,99</td>
            <td class="text-green-600 font-medium">Sim</td>
        </tr>
    `
 
}) 