const http = require("http");
const { hostname } = require("os");

const HOST = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain"); //setHeader recebe dois parametros (chave e valor) informando a forma como vai voltar o dado (esse pode ser json, text, etc)
  res.end("Resposta enviada!");
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor está rodando em: http://${HOST}:${PORT}`);
});
