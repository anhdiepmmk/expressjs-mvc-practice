const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();
const port = 3000;

app.use(cors());
app.use(compression());


// const exampleMiddleware = require('./app/Middleware/ExampleMiddleware');
// app.use('/',exampleMiddleware({}));

const requestTime = function (req, res, next) {
    console.log(new Date().getTime());
    next();
    console.log(2, new Date().getTime())
};

app.use(requestTime);


const defaultRouter = require('./routers/default');
app.use('/', defaultRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
