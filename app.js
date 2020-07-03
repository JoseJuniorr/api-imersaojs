const express = require('express')
const mongoose = require('mongoose')
const { json } = require('express')

const cors = require('cors')


require('dotenv').config()


const app = express()


require('./models/home')
const Home = mongoose.model('Home')

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST,DELETE')
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization')
    app.use(cors())
    next()
})

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster-api-siteapp-ime.9jflh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado com a Cloud MongoDB...')

}).catch((err) => {
    console.log('Erro ao conectar com o banco de dados.' + err)
})




app.get('/home', (req, res) => {
    Home.findOne({}).then((home) => {
        return res.json(home)
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado"
        })
    })

})

app.post('/home', (req, res) => {
    const data = {
        
    }
    Home.create(req.body, (err) => {
        if (err) return res.status(400).json({
            err: true,
            message: 'Erro: conteúdo não cadastrado!'
        })
    })
    return res.json({
        error: true,
        message: 'Conteúdo da HomePage cadastrado com sucesso!'
    })
})




app.listen(3333, () => {
    console.log('Servidor iniciado na porta 3333: http://localhost:3333')
})
