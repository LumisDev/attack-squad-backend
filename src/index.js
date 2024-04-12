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

server.listen(3000, '54.191.253.12', undefined, () => {
	console.log('Listening on 54.191.253.12:3000')
})
