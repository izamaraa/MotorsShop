import { IAddressRequest } from "../address"

export interface IUserRequest {
    name: string;
    email: string;
    cpf: string;
    password: string;
    birthDate: string;
    phone: string;
    isActive?: boolean;
    isSeller?: boolean;
    bio: string;
    image?: string;
    address: IAddressRequest
}

export interface IUserLogin {
    email: string;
    password: string;
}
