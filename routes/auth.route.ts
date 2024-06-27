import express, {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import { Appdatasource } from '../Appdatasource'
import { UsersEntity } from '../entities/users.entity'


const router = express.Router()


router.post("/login", async(req: Request, res: Response)=>{

    const {username, password} = req.body

    const user = await Appdatasource.createQueryBuilder().select().from(UsersEntity, "users").where({username: username}).execute()

    if(user && user.length > 0){
        const token = jwt.sign({uid: user[0].uid}, 'play2decrypt', {expiresIn: '1hrs'})
        
        res.status(200).send(token)
    }else{
        res.status(201).send({error: 'user not found'})
    }


})

router.post("/register", async(req: Request, res: Response)=>{
    const {username, password} = req.body

    const user = await Appdatasource.createQueryBuilder().select().from(UsersEntity, "users").where({username: username}).execute()

    if(user && user.length > 0){
        res.status(404).send({error: 'username has been taken!'})
    }else{

        const inserted = await Appdatasource.createQueryBuilder().insert().into(UsersEntity).values({username: username, password: password}).execute()

        const token = jwt.sign({uid: inserted.raw.insertId}, 'play2decrypt', {expiresIn: '1hrs'})

        res.status(200).send(token)
    }
})


module.exports = router