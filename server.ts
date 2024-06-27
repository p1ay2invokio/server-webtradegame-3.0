// Written by p1ay2.14 please give credit if you use this

import cors from 'cors'
import express, {Request, Response} from 'express'
const test = require('./routes/test.route')
const auth = require('./routes/auth.route')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', test, auth)

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})