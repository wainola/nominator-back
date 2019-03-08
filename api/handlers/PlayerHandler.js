const PlayerModel = require('../models/PlayerModel');
const Error = require('../errors');
const bodyParser = require('body-parser');

class PlayerHandler {
    static async getPlayers(req, res) {
        const players = await PlayerModel.allPlayers();
        return res.status(200).send({ players: players });
    }

    static async getPlayer(req, res) {
        const id = req.params.id;
        const players = await PlayerModel.allPlayers();
        const arrPlayer = await players.filter(item => item.id == id);
        return res.status(200).json(arrPlayer);
    }

    static async addPlayer(request, res) {
        console.log(await request.body);
        return res.send('hola');//.Error[201].send(sentPlayer);
    }
}

module.exports = PlayerHandler;