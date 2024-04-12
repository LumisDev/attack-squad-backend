const express = require('express')
const cors = require('cors')
const { monitor } = require('@colyseus/monitor')
const { Server } = require('colyseus')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/monitor', monitor())
const server = new Server({
	server: require('http').createServer(app)
})

const serverPort = process.env.PORT || 3000
const hostName = process.env.SERVER_HOST || 'localhost'

server.listen(serverPort, () => {
	console.log(`Listening to clients in ${hostName}:${serverPort}`)
})
