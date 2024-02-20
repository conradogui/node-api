import Fastify from 'fastify'
import { produtoService } from './services/produtos.sevice.js'


const PORT = 5005

const fastify = Fastify({
  logger: false
})

fastify.get('/', (request, reply) => {
  reply.send('Servidor rodando')
})

fastify.get('/produtos', produtoService.buscarProdutos)

fastify.get('/produtos/:id', produtoService.buscarProdutosPorId)

fastify.post('/produtos', produtoService.criarProduto)

fastify.put('/produtos/:id', produtoService.atualizarProdutoParcial)

fastify.patch('/produtos/:id', produtoService.atualizarProduto)

fastify.delete('/produtos/id', produtoService.deletarProduto)

fastify.listen({ port: PORT }, (err, address) => {
  if (err) throw err
  console.log(`servidor está rodando em: ${address}`)
})