import { User } from "../user/user.model";

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
    username: string;
    user: User;
}