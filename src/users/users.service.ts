import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UsersService{
    private users: User[] = [];

    insertUSer(name: string, email: string, password: string) {
        const id = uuidv4();
        const newUser = new User(id, name, email, password);
        this.users.push(newUser);
        return id;
    }

    getUsers() {
        return [...this.users];
    }

    getUser(id: string) {
        return this.getUserById(id)[0];
    }

    updateUser(id: string, name: string, email: string, password: string){
        const [targetUser, index] = this.getUserById(id);
        const newUserParams = { ...targetUser, name, email, password};
        const newUser = new User(id, newUserParams.email, newUserParams.name, newUserParams.password);
        this.users[index] = newUser;
        return newUser;
    }

    deleteUser(id: string) {
        const [,index] = this.getUserById(id);
        this.users.splice(index, 1);
    }

    private getUserById(id: string): [User, number] {
        const index = this.users.findIndex(u => u.id === id);
        return [this.users[index], index];
    }
}