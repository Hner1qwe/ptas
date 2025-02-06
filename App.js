import express from 'express'
import { router } from './routes/Legoroutes.js'

const App = express()

App.use(express.json())

App.use('/legos', router)

App.listen(3000, ()=>{
    console.log("rodando")
})

