const router = require('express').Router();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> WIP userhandler
const UserHandler = require('../handlers/UserHandler');

router.get('/test2', (req, resp) => resp.status(200).send({ msg: 'test two' }));

router.post('/register', UserHandler.register);

<<<<<<< HEAD
=======

router.get('/test2', (req, resp) => resp.status(200).send({ msg: 'test two' }));

>>>>>>> user test, handler, model and test
=======
>>>>>>> WIP userhandler
module.exports = router;
