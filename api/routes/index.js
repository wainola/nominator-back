const router = require('express').Router();
const UserHandler = require('../handlers/UserHandler');
const PlayersHandler = require('../handlers/PlayerHandler');

router.get('/test2', (req, resp) => resp.status(200).send({ msg: 'test two' }));

router.post('/register', UserHandler.register);

router.get('/players', PlayersHandler.getPlayers);
router.get('/players/:id', PlayersHandler.getPlayer);
router.post('/players', PlayersHandler.addPlayer)

module.exports = router;
