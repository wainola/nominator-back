const router = require('express').Router();
const UserHandler = require('../handlers/UserHandler');

router.get('/test2', (req, resp) => resp.status(200).send({ msg: 'test two' }));

router.post('/register', UserHandler.register);

module.exports = router;
