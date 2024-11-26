import express from "express";


const posts = [
    {
        descricao: "Uma foto",
        imagem: "https://placecats.com/millie/300/150",
    }
]
const app = express();

app.listen(3000, () => {
    console.log("Servidor recebendo...");
});

app.get("/api", (req, res) => {
    res.status(200).send("rota inicial");
});