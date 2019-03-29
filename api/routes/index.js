const router = require('express').Router();
const UserHandler = require('../handlers/UserHandler');
const PlayerHandler = require('../handlers/PlayerHandler');

router.get('/test2', (req, resp) => resp.status(200).send({ msg: 'test two' }));

router.post('/register', UserHandler.register);


// Players
router.get('/players', PlayerHandler.add);

module.exports = router;
