import {inject, injectable} from "inversify";
import type UserRepository from "../../repository/UserRepository";
import TYPES from "../../repository/Types";
import User from "../../entity/User/structure/User";

@injectable()
export default class UpdateUserUseCase{
    private userRepository: UserRepository;

    constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    updateUser(user: User): Promise<void>{
        return this.userRepository.updateUser(user)
    }
}