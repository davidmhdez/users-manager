import UserRepository from "../../../domain/repository/UserRepository";
import { injectable } from 'inversify';
import "reflect-metadata";
import User from "../../../domain/entity/User/structure/User";
import ai from "../../config/axios";

@injectable()
export default class UserRepositoryImp implements UserRepository{

    private sanitizeUser(user: User): FormData{
        const formData = new FormData();
        user.image
            ? formData.append('image', user.image)
            : formData.append('imageUrl', user.imageUrl)
        formData.append('name', user.name)
        formData.append('gender', user.gender)
        formData.append('emails', user.emails.join(','))
        formData.append('status', user.status)

        return formData;
    }

    private formatUser(unformatedUser: any): User{
        return{
            ...unformatedUser,
            image: null
        }
    }

    async createUser(user: User): Promise<void> {
        const payload = this.sanitizeUser(user);
        await ai.post('/users', payload);
    }

    async getUsers(page: number, perPage: number): Promise<User[]> {
        const params: string[] = [];
        page && params.push(`page=${page - 1}`);
        perPage && params.push(`size=${perPage}`);
        const queryParams = params.length > 0 ? `?${params.join('&')}` : '';

        const { data } = await ai.get(`/users${queryParams}`);
        return data.map((d: any)=> {
            return this.formatUser(d)
        })
    }

    async deleteUser(userId: number): Promise<void> {
        await ai.delete(`/users/${userId}`);
    }

    async updateUser(user: User): Promise<void> {
        const payload = this.sanitizeUser(user);
        await ai.put(`/users/${user.id}`, payload);
    }
}