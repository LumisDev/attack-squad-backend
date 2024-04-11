import { Schema, Context, type } from "@colyseus/schema";

export class PlayRoomState extends Schema {

  @type("string") mySynchronizedProperty: string = "Hello world";

}
