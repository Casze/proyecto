import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map} from 'rxjs';
import { GetProductsGQL, ProductInfoFragment } from 'src/app/graphql/querys.generates';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private getProductsGQL: GetProductsGQL,
		private apollo: Apollo) { }

    
    getProduct(): Observable<ProductInfoFragment[]> {
      console.log(this.getProductsGQL.fetch().pipe(map((res:any) => res ?? [])));
        return this.getProductsGQL.fetch().pipe(
        map((res) => res.data.products)
      );
      
    } 

   /*  getAllMovies(): Observable<MovieInfoFragment[]> {
		return this.getAllMoviesGQL.watch().valueChanges.pipe(
			map((res) => res.data.getAllMovies ?? []),
			map((movies) => movies.slice().reverse())
		); 
	}*/
    
    
}
