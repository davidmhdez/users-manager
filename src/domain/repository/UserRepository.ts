import User from "../entity/User/structure/User";

export default interface UserRepository{
    createUser(user: User): Promise<void>
    updateUser(user: User): Promise<void>
    deleteUser(userId: number): Promise<void>
    getUsers(page: number, perPage: number): Promise<User[]>
}