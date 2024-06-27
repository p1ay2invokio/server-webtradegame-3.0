import express,{Request, Response} from 'express'

const router = express.Router()


router.get('/test', (req:Request, res:Response)=>{
    res.status(200).send("Testing API!")
})


module.exports = router