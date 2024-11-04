import express from 'express';
import fileUpload from 'express-fileupload'
import { atualizandoImagem, deletandoImagem, downloadImagem, inserindoImagem, mostrandoImagem } from './controllers/imagemController.js';

const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('API Funcionando')
});

app.get('/public/:nome_imagem',downloadImagem);

//CRUD Imagens
app.post('/imagem', inserindoImagem);
app.get('/imagem', mostrandoImagem);
app.put('/imagem/:id_imagem', atualizandoImagem);
app.delete('/imagem/:id_imagem', deletandoImagem);

app.listen(porta, ()=> {
    console.log(`API Rodando na porta ${porta}`);
});
