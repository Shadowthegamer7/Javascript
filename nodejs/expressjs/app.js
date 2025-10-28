import express from "express";

const app = express();
const PORT = 3000;

app.use((req,res, next) => {
    res.setHeader("Cntent-Type", "text/html; charset= itf-8");
    next();
});
app.get ("/", (req, res) => {
    res.status(200).send("<h1>Pagina Inicial</h1>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Pagina sobre</h1>");
});

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>Pagina foto</h1>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Pagina contato</h1>");
});

app.use((req, res) => {
    res.status(404).send("<h1> 404 - pagina não encontrada");
});

app.listen(PORT, () => {
    console.log('servidor rodando em http://localhost:${PORT}');
});