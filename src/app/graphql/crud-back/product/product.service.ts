import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular'; // Importa QueryRef para manejar las consultas
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core'; // Asegúrate de importar ApolloQueryResult
import { GetAllProductsQuery, GetAllProductsQueryResult } from '../graphql.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsQuery: QueryRef<GetAllProductsQueryResult>;

  constructor(

    private apollo: Apollo,

    ) {
    // Crea la consulta una vez en el constructor para reutilización
    this.productsQuery = this.apollo.watchQuery<GetAllProductsQueryResult>({
      query: GetAllProductsQuery,
    });
  }

  getAllProducts(): Observable<ApolloQueryResult<GetAllProductsQueryResult>> {
    return this.productsQuery.valueChanges;
  }

  // Puedes agregar otros métodos para mutaciones u otras operaciones relacionadas con productos aquí
}