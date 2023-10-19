
import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { 
    User, 
    MutationCreateUserArgs,
    MutationLoginArgs
    } from '../../../graphql/generated';

@Injectable({
	providedIn: 'root',
})
export class MovieApiService {
	constructor(
		private getAllUserGQL: User,
		private apollo: Apollo
	) {}
}