import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client';
import { GetAllProductsQuery, GetAllProductsQueryResult} from '../graphql.types'; // Asegúrate de importar los tipos correctos

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apollo: Apollo) {}

  getAllProducts(): Observable<ApolloQueryResult<GetAllProductsQueryResult>> {
    return this.apollo.watchQuery<GetAllProductsQueryResult>({
      query: GetAllProductsQuery,
    }).valueChanges;
  }

  // Otros métodos para mutaciones y otras operaciones relacionadas con productos
}