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


//error handler: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
router.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    console.error(err.name)    //CustomError
    console.error(err.foo)     //baz
    console.error(err.message) //bazMessage
    console.error(err.stack)   //stacktrace
    res.status(500).json({ error: err.stack })
});

//{"error":{"code":"GEN-NOT-FOUND","http_code":404,"message":"Resource Not Found"}}

module.exports = router;
