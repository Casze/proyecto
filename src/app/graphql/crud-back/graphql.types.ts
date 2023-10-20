
import { gql } from 'apollo-angular';
import { Product } from '../crud-back/product/product.model'; // Asegúrate de importar los tipos necesarios

// Define la consulta GraphQL para obtener todos los productos
export const GetAllProductsQuery = gql`
  query GetAllProducts {
    products {
      id
      name
      category
      price
      description
      image
      username
      user {
        id
        name
        password
        email
      }
    }
  }
`;

// Define el tipo correspondiente para el resultado de la consulta
export interface GetAllProductsQueryResult {
  products: Product[];
}