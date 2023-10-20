import { Product } from "../product/product.model";

export interface User {
    id: number;
    name: string;
    password: string;
    email?: string | null;
    Products: Product[];
  }

  