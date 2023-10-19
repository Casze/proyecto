import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { 
    GetAllProductsGQL,
    Product,
    QueryProductArgs,
    QueryProductsByUserArgs,
    MutationCreateProductArgs,
    MutationDeleteProductArgs,
    ProductInfoFragment,
    } from '../graphql/generated';
import { Observable, map } from "rxjs";

@Injectable({
	providedIn: 'root',
})
export class MovieApiService {
	constructor(
		private getAllProductGQL: GetAllProductsGQL,
		private apollo: Apollo
	) {}
    
    getAllProduct(): Observable<ProductInfoFragment[]> {
		return this.getAllProductGQL.watch().valueChanges.pipe(
			map((res) => res.data.products ?? [])
		);
	}
    
}