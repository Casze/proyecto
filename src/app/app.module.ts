import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuSidebarComponent } from './shared/menu-sidebar/menu-sidebar.component';
import { MenuTopComponent } from './shared/menu-top/menu-top.component';
import { GraphQLModule } from './graphql/graphql.module';
import { PrimengModule } from './primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuSidebarComponent,
    MenuTopComponent,
      
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule, 
    ReactiveFormsModule,
    ApolloModule,
    HttpClientModule
  ],
  providers: [GraphQLModule,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "http://localhost:3000/graphql"
          })
        }
      },
      deps: [HttpLink]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
