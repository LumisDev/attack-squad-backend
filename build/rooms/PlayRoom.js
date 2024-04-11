"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayRoom = void 0;
const core_1 = require("@colyseus/core");
const PlayRoomState_1 = require("./schema/PlayRoomState");
class PlayRoom extends core_1.Room {
    constructor() {
        super(...arguments);
        this.maxClients = 20;
    }
    onCreate(options) {
        this.setState(new PlayRoomState_1.PlayRoomState());
        this.onMessage("type", (client, message) => {
            //
            // handle "type" message
            //
        });
    }
    onJoin(client, options) {
        console.log(client.sessionId, "joined!");
    }
    onLeave(client, consented) {
        console.log(client.sessionId, "left!");
    }
    onDispose() {
        console.log("room", this.roomId, "disposing...");
    }
}
exports.PlayRoom = PlayRoom;
