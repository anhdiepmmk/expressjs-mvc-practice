const express = require('express');
const router = express.Router();

const exampleController = require('../app/Http/Controllers/ExampleController');

//Declare middleware
router.use('/example$', function (req, res, next) {
    console.log('GOI VAO INDEX');
    next();
});

router.use('/example/:id(\\d+)', function (req, res, next) {
    console.log('GOI VAO SHOW');
    next();
});

router.get('/example$', exampleController.index);
router.get('/example/:id(\\d+)', exampleController.show);
router.post('/example/', exampleController.store);
router.put('/example/:id', exampleController.update);
router.delete('/example/:id', exampleController.destroy);


//error handler
router.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    //console.log(err);
    res.status(500).json({ error: err.stack })
});

module.exports = router;
