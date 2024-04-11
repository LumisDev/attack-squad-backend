import { Room, Client } from "@colyseus/core";
import { PlayRoomState } from "./schema/PlayRoomState";

export class PlayRoom extends Room<PlayRoomState> {
  maxClients = 20;

  onCreate (options: any) {
    this.setState(new PlayRoomState());

    this.onMessage("type", (client, message) => {
      //
      // handle "type" message
      //
    });
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
