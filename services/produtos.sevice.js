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

    atualizarProdutoParcial: (req,res) => {
        let id = req.params.id

        let produto = produtos.find(p => p.id === parseInt(id))

        //!produto -> se não existir
        if(!produto ) {//undefined, null, 0
        res.status(404).send({message:'Produto não encontrado'})
        return
        }

        //atualiza cada propriedade do produto do array com o produto do body
        produto.nome = req.body.nome
        produto.preco = req.body.preco
        produto.off = req.body.off

        res.status(201).send(produto)
    },

    atualizarProduto: () => {
        
    },
    deletarProduto: (req, res) => {
        let id = req.params.id
        let produto = produtos.slice(id, 1)
        return produtos.push(produto)


    }
}