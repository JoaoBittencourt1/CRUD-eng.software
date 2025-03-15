const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

// Rota para pegar os dados do banco
app.get("/dados", (req, res) => {
  db.query("SELECT * FROM tabela", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Inicia o servidor
app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
