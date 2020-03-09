const express = require('express');
const router = express.Router();

const exampleController = require('../app/Http/Controllers/ExampleController');

router.use(function (req, res, next) {
    console.log('Url iss: ' + req.url);
    next();
});

router.get('/', exampleController.index);
router.get('/:id', exampleController.show);
router.post('/', exampleController.store);
router.put('/:id', exampleController.update);
router.delete('/:id', exampleController.destroy);

module.exports = router;
