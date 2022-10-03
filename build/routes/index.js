"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./api/images"));
const routes = express_1.default.Router();
routes.use('/api/images', images_1.default);
routes.get('/', (request, response) => {
    response.send('<p>Listening on <code><a href="/api/images">/api/images</a></code>...</p><p>Examples:<ul><li><a href="/api/images?filename=palmtunnel">/api/images?filename=palmtunnel</a></li><li><a href="/api/images?filename=palmtunnel&width=100&height=100">/api/images?filename=palmtunnel&width=100&height=100</a></li></ul></p>');
});
exports.default = routes;
