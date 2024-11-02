import mysql from 'mysql2/promise';
import db from '../conexao.js';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createImagem(descricao,nome_imagem,imagem) {
    console.log('ImagemModel :: createImagem');
    const conexao = mysql.createPool(db);
    const sql = 'INSERT INTO imagens (caminho,descricao) VALUE(?,?);';
    const params = [descricao, nome_imagem];

    try{
        await imagem.mv(path.join(__dirname, '..','..','public','img',nome_imagem));
        const [retorno] = await conexao.query(sql,params);
        return [201, 'Imagem Cadastrada'];
    }catch(error){
        console.log(error);
        return [500, error];
    }
}