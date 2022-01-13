const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {createMessages} = require('./controllers/controller')

app.post('/api/messages', createMessages)

app.listen(4004, () => console.log('running on port 4004'))