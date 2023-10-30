const PORT = process.env.PORT || 3000

const http = require('http')
const mongoose = require('mongoose')

const app = require('./app')

const server = http.createServer(app)

const MONGO_URL = 'mongodb://127.0.0.1:27017/linkedup'

mongoose.connection.once('open', () => {
    console.log('MongoDB Connection Succesfully');
})


mongoose.connection.once('error', () => {
    console.log('MONGODB Connection Error');
})

async function startServer() {
    await mongoose.connect(MONGO_URL)

    server.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    })
}

startServer()