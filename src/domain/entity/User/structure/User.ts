type User = {
    id: number | null
    name: string
    image: File | null
    imageUrl: string
    emails: string[]
    gender: Gender | ""
    status: UserStatus | ""
}

export const defaultUser: User = {
    id: null,
    name: "",
    image: null,
    imageUrl: "",
    emails: [],
    gender: "",
    status: ""
}

export enum UserStatus{
    Active = 'activo',
    Inactive = 'inactivo'
}

export enum Gender{
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export default User