import { DataSource } from "typeorm";

const type = "mysql"
const host = "localhost"
const username = 'root'
const password = ''


export const Appdatasource = new DataSource({
    type: type,
    host: host,
    username: username,
    password: password,
    entities: ['./entities/*.entity.ts'],
    synchronize: false,
    database: 'project'
})


Appdatasource.initialize().then((res)=>{
    console.log(`Database Initialized | ${type} ${host} ${username} ${password}`)
})