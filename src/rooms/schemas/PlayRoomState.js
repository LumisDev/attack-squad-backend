const schema = require('@colyseus/schema')
const Schema = schema.Schema

class PlayRoomState extends Schema {}
schema.defineTypes(PlayRoomState, {
	skinFile: 'string',
	x: 'number',
	y: 'number',
	healthPoints: 'number',
	kills: 'number',
	deaths: 'number',
	score: 'number'
})
module.exports = PlayRoomState
