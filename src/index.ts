import express from 'express'
import {createServer} from 'http'
import {RedisDriver, Server} from 'colyseus'
import { PlayRoom } from './rooms/PlayRoom'

const app = express()
app.use(express.json())

const gameServer = new Server({
    server: createServer(app),
    
})

gameServer.define('play_room', PlayRoom)
gameServer.listen(3000)