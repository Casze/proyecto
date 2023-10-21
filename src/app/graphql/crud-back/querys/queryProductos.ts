import { gql } from "apollo-angular";

const getAllProduct = gql`
 query {
        products {
          id,
          name,
          category,
          price,
          description,
          image
        }
      }
`;

export class ProductsQuerysService{
    getAllProduct = getAllProduct;
}