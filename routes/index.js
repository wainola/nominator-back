const router = require('express').Router();

router.get('/test2', (req, resp) => resp.status(200).send({ msg: 'test two' }));

module.exports = router;
