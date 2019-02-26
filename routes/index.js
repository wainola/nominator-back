const router = require('express').Router();
<<<<<<< HEAD
const UserHandler = require('../handlers/UserHandler');

router.get('/test2', (req, resp) => resp.status(200).send({ msg: 'test two' }));

router.post('/register', UserHandler.register);

=======

router.get('/test2', (req, resp) => resp.status(200).send({ msg: 'test two' }));

>>>>>>> user test, handler, model and test
module.exports = router;
