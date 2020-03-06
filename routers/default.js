const express = require('express');
const router = express.Router();

const exampleController = require('../app/Http/Controllers/ExampleController');
router.get('/', exampleController.index);
router.get('/:id', exampleController.show);
router.post('/', exampleController.store);
router.put('/:id', exampleController.update);
router.delete('/:id', exampleController.destroy);

module.exports = router;
