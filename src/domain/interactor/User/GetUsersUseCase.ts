import {inject, injectable} from "inversify";
import type UserRepository from "../../repository/UserRepository";
import TYPES from "../../repository/Types";
import "reflect-metadata";
import User from "../../entity/User/structure/User";

@injectable()
export default class GetUsersUseCase{
    private userRepository: UserRepository;

    constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    getUsers(page: number, perPage: number): Promise<User[]>{
        return this.userRepository.getUsers(page, perPage);
    }
}