const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para verificar a disponibilidade do domínio
app.post('/verificar-dominio', async (req, res) => {
    const { dominio } = req.body;
    const apiKey = '791eeea7f75b64af3d3c5'; // Substitua pela sua chave de API do NameSilo
    const apiUrl = `https://www.namesilo.com/api/checkRegisterAvailability?version=1&type=json&key=${apiKey}&domains=${dominio}`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data); // Retorna a resposta da API do NameSilo
    } catch (error) {
        res.status(500).json({ error: 'Erro ao verificar o domínio' });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});