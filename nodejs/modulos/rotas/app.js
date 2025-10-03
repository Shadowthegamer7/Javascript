import http, { request } from "http";
// Importa o módulo HTTP do Node.js
const port = 3000;
// Define a porta do servidor
const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
//Define o cabeçalho da resoposta como HTML
response.setHeader("Content-Type", "text/html; charset=utf-8");

// Roteamento Básico
if (url === "/") {
    response.statusCode = 200;
    response.end("<h1>Página Inicial</h1>");
  } else if (url === "/sobre" && method === "GET") {
    response.statusCode = 200;
    response.end(
        "<h1>Sobre Nós</h1><p>Está é uma plicação de exemplo com node.js puro.</p>"
    );
  } else if (url === "/contato") {
    response.statusCode = 200;
    response.end("<h1>Fale conosco.</h1>");

} else if (url === "fotos") {
    response.statusCode = 200;
    response.end("<h1>Veja nossas fotos.</h1>");

} else if (url === "imagens") {
    response.statusCode = 200;
    response.end("<h1>Nossas Imagens.</h1>");

} else {
    response.statusCode = 404;
    response.end("<h1>Página não encontrada!</h1>");

  }
});

//Iniaca o servidor para ouvir na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
