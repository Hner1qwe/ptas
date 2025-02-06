import express from 'express'
import { listarlegos, criarLegos, buscarLegos } from '../controllers/contoller.js';


const router = express.Router();

router.get('/', listarlegos)
router.post('/', criarLegos)
router.get('/:id', buscarLegos)

export{router}