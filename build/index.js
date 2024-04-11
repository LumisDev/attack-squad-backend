"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const colyseus_1 = require("colyseus");
const PlayRoom_1 = require("./rooms/PlayRoom");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const gameServer = new colyseus_1.Server({
    server: (0, http_1.createServer)(app),
});
gameServer.define('play_room', PlayRoom_1.PlayRoom);
gameServer.listen(3000);
