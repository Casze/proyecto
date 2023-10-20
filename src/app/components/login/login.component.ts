import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';


import { ProductService } from '../../graphql/crud-back/product/product.service';
import { Product } from '../../graphql/crud-back/product/product.model';
import { GetAllProductsQueryResult } from '../../graphql/crud-back/graphql.types';
import { ApolloQueryResult } from '@apollo/client/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService
    ) {}

  ngOnInit(): void {
    
    this.productService.getAllProducts().subscribe((result: ApolloQueryResult<GetAllProductsQueryResult>) => {
      this.products = result.data.products;
    });
    
  }
}