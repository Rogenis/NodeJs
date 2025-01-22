import express from 'express';
const app = express();

// Porta do servidor
const PORT = 3000;

// Rota com Query Parameters
// http://localhost:3000/hello?name=Rogenis
app.get('/hello', (req, res) => {
    const { name } = req.query;
    res.send({
        message: `Olá, ${name || 'visitante'}!`,
    });
});

// Rota com URL Parameters
app.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send({
        message: `Você acessou a rota com o ID: ${id}`,
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
