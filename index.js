const express = require('express')
const app = express()
const port = 3000

const defaultRouter = require('./routers/default')

app.use('/', defaultRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
