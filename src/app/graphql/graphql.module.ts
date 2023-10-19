
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ApolloModule, APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
	// React only on graphql errors
	if (graphQLErrors && graphQLErrors.length > 0) {
		if (
			(graphQLErrors[0] as any)?.statusCode >= 400 && 
			(graphQLErrors[0] as any)?.statusCode < 500
		) {
			// handle client side error
			console.error(`[Client side error]: ${graphQLErrors[0].message}`);
		} else {
			// handle server side error
			console.error(`[Server side error]: ${graphQLErrors[0].message}`);
		}
	}
	if (networkError) {
    // handle network error
    console.error(`[Network error]: ${networkError.message}`);
	}
});

const basicContext = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			Accept: 'charset=utf-8',
			authorization: `Bearer random token`,
			'Content-Type': 'application/json',
		},
	};
});
export function createDefaultApollo(httpLink: HttpLink): ApolloClientOptions<any> {
	const cache = new InMemoryCache({});

	// create http 
	const http = httpLink.create({
		uri: 'http://localhost:3000/graphql',
	});

	return {
		connectToDevTools: !environment.production,
		assumeImmutableResults: true,
		cache,
		link: ApolloLink.from([basicContext, errorLink, http]),
		defaultOptions: {
			watchQuery: {
				errorPolicy: 'all',
			},
		},
	};
}
//Corrección 
export function createNamedApollo(httpLink: HttpLink)
: Record<string, ApolloClientOptions<any>> {
	return {
		spaceX: {
			name: 'spaceX',
			link: httpLink.create({ uri: 'https://api.spacex.land/graphql/' }),
			cache: new InMemoryCache(),
		},
	};
}


@NgModule({
	imports: [BrowserModule, HttpClientModule, ApolloModule],
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory: createDefaultApollo,
			deps: [HttpLink],
		},
    {
			provide: APOLLO_NAMED_OPTIONS,
			useFactory: createNamedApollo,
			deps: [HttpLink],
		},
	],
})
export class GraphQLModule {}