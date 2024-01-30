const PORT = 5005

const fastify = require('fastify')({
  logger: false
})

fastify.get('/', (request, reply) => {
  reply.send('Servidor rodando')
})

fastify.get('/produtos', (request, reply) => {
    reply.send('Produtos')
  })

fastify.listen({ port: PORT }, (err, address) => {
  if (err) throw err
  console.log(`servidor está rodando em: ${address}`)
})