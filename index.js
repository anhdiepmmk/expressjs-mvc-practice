const express = require('express');
const app = express();
const port = 3000;

//Middleware
const myMiddleware = require('./app/Middleware/MyMiddleware');
app.use(myMiddleware());

//Router
const defaultRouter = require('./routers/default');
app.use('/', defaultRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
