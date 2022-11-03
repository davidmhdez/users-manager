import type UserRepository from "../../repository/UserRepository";
import {inject, injectable} from "inversify";
import TYPES from "../../repository/Types";
import "reflect-metadata";
import User from "../../entity/User/structure/User";

@injectable()
export default class CreateUserUseCase{
    private userRepository: UserRepository;

    constructor(@inject(TYPES.UserRepository) userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    createUser(user: User){
        return this.userRepository.createUser(user);
    }
}