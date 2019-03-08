const PlayerModel = require('../models/PlayerModel');
const Error = require('../errors');

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

    static async addPlayer(req, res) {
        console.log(req);
        return res.send('hola');//.Error[201].send(sentPlayer);
    }
}

module.exports = PlayerHandler;