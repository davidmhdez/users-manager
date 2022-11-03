import {inject, injectable} from "inversify";
import type UserRepository from "../../repository/UserRepository";
import TYPES from "../../repository/Types";

@injectable()
export default class DeleteUserUseCase{
    private userRepository: UserRepository;

    constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    deleteUser(userId: number): Promise<void>{
        return this.userRepository.deleteUser(userId);
    }
}