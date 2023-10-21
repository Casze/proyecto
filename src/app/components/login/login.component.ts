import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Apollo, gql  } from 'apollo-angular';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInfoFragment } from 'src/app/graphql/querys.generates';
import { ProductsService } from 'src/app/services/products/products.service';

const query1 = gql`
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
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  // variables para almacenar 
  test2!: any[];
  // llamada de constructor
  constructor(
    private productService: ProductsService,
    private apollo: Apollo
    ) {}
    // se llama cuando se inicia la pagina
  ngOnInit(): void {
    /* this.apollo
    .watchQuery<any>({
      query: query1,
    })
    .valueChanges.subscribe(({data}) => {
      this.test2 = data.products;
      console.log(this.test2);
    }); */
    
    
    this.getAllProductos();


    //console.log(this.productService.getProduct());
    //this.test = this.apollo.watchQuery({ query: query1 }).valueChanges.pipe(map((result:any) => result.data.products));
    //console.log(this.test);
    
  }

  // crear funciones 

  getAllProductos():void{
     this.apollo
    .watchQuery<any>({
      query: query1,
    })
    .valueChanges.subscribe(({data}) => {
      this.test2 = data.products;
      console.log(this.test2);
      //funciones etc 
    });
  }
}