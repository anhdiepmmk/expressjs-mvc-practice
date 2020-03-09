const express = require('express');
const app = express();
const port = 3000;


// const exampleMiddleware = require('./app/Middleware/ExampleMiddleware');
// app.use('/',exampleMiddleware({}));

var requestTime = function (req, res, next) {
    console.log(new Date().getTime())
    next()
}

app.use(requestTime)

const defaultRouter = require('./routers/default');
app.use('/', defaultRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
