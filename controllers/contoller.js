import { randomUUID } from 'node:crypto'


let legos = []



const listarlegos = (req, res) => {
    res.json(legos)
}

const criarLegos = (req, res) => {
    const { nome, pecas, preco } = req.body

    const lego = 
        {
            id: randomUUID(),
            nome,
            pecas,
            preco
        }

    try {
        legos.push(lego)
        return res.json(lego)
    } catch (error) {

        console.log(error)
        return res.end('lego nao inserido')
    }

}
const buscarLegos = (req, res) =>{

    console.log(req.params)
    const lego = legos.find((a) => a.id === id) 

    if(!legos) {
        console.log('nao encontrado')
    }
     
    res.json('parametros')
} 

const atualizarLegos = (req, res) => {
    const {id} = req.params;
    const {nome, pecas, preco} = req.body;

    const lego = legos.find((a) => a.id === id)

}


export{listarlegos, criarLegos, buscarLegos}