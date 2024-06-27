import {Entity, Column, PrimaryColumn} from 'typeorm'

@Entity({name: 'users'})
export class UsersEntity{
    @PrimaryColumn({name: 'uid'})
    uid: string

    @Column({name: 'username'})
    username: string

    @Column({name: 'password'})
    password: string
}