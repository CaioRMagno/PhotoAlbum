import express from "express";


const posts = [
    {
        id: 1,
        descricao: "Uma foto",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gato brincando",
        imagem: "https://placecats.com/whiskers/400/200",
    },
    {
        id: 3,
        descricao: "Gato dormindo",
        imagem: "https://placecats.com/snuggle/500/250",
    },
    {
        id: 4,
        descricao: "Gato curioso",
        imagem: "https://placecats.com/curious/300/300",
    },
    {
        id: 5,
        descricao: "Gato aventureiro",
        imagem: "https://placecats.com/adventure/450/250",
    },
    {
        id: 6,
        descricao: "Gato elegante",
        imagem: "https://placecats.com/fancy/350/200",
    }
];


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor recebendo...");
});

app.get("/post", (req, res) => {
    res.status(200).json(posts);
});
function buscarPostPorId(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    })
}

app.get("/post/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});