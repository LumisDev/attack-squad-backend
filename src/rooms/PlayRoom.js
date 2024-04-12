const { Room } = require('colyseus')
const PlayRoomState = require('./schemas/PlayRoomState')
class PlayRoom extends Room {
	onCreate() {
		this.setState(new PlayRoomState())
	}
}

module.exports = PlayRoom
