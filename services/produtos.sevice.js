import { produtos } from "../db/produtos.js"

export const produtoService = {
    buscarProdutos: (req, res) => { //dentro do objeto eu declaro a função dessa forma 
        return produtos
    },
    buscarProdutosPorId: (req, res) => {
        let id = req.params.id
    },
    criarProduto: (req,res) => {
        let produto = req.body //peguei o corpo da requisição e no push coloquei o produto dentro de produtos
        return produtos.push(produto)
    },
    atualizarProduto: () => {

    },
    deletarProduto: () => {

    }
}