// importa o modúlo http nativo do Node.js

import http from "http";

const PORT = 3000;

// Cria o servidor
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    //Define o cabeçalho da resposta com HTML
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    // Roteamento Basico
    if (url === "/") {
        response.statusCode = 200; // ok
        response.end("<h1>Página Inicial</h1>");
    } else if (url === "/sobre" && method === "GET") {
        response.statusCode = 200; // ok
        response.end("<h1>Sobre nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro.</p>");
    } else if (url === "/contato") {
        response.statusCode = 200; // ok
        response.end("<h1>Fale conosco</h1>");
    } else if (url === "/fotos") {
        response.statusCode = 200; // ok
        response.end("<h1>fotos</h1>");
    } else if(url ==="/imagens"){
        response.statusCode = 200; //ok
        response.end("<h1>Imagens</h1>");
    } else {
        response.statusCode = 404; // not found
        response.end("<h1>Página não encontrada</h1>");
    }

});

//iniciar o servidor
server.listen(PORT, () => {console.log(`Servidor rodando em http://localhost:${PORT}`);

});