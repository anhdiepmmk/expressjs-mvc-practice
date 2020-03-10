const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();
const port = 3000;

app.use(cors());
app.use(compression());

const defaultRouter = require('./routers/default');
app.use('/', defaultRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
