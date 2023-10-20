
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ApolloClient, ApolloQueryResult, InMemoryCache, gql } from '@apollo/client';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import {  } from 'src/app/graphql/generated';

import { ProductService } from '../../graphql/crud-back/product/product.service';
import { Product } from '../../graphql/crud-back/product/product.model';
import { GetAllProductsQueryResult } from '../../graphql/crud-back/graphql.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  @Input() bannerMsj = '';
  loading = false;
  username = '';
  password = '';
  hide = true;
  logs: any;
  public log: string[] = [];
  public recaptchaMode = 'v3';
  isCapcha = false;
  @Input() redirectToHome = true;
  @Output() redirectTo = new EventEmitter();

 
  constructor(
    
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,

  ) { }


  ngOnInit(): void {    
    this.primengConfig.ripple = true;
    console.log('Funciona Login.Component.ts linea: 45')
   
  }

  
  login(): void {
    this.loading = true;
    if (this.username && this.username.length > 0) {
      if (this.password && this.password.length > 0) {
        //const aesUtil = new AesUtil(128, 1000);
        //const passEncrypt = aesUtil.encriptarPassword(this.password);
        //localStorage.setItem('usuarioLogin', passEncrypt);
       
      } else {
        this.showError("falta contraseña");
      }
    } else {
      this.showError("falta usuario");
    }
  }
 
  showError(message: string): void {
    this.loading = false;
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }


  showResponse(): void {
    this.isCapcha = true;
    this.messageService.add({severity: 'info', summary: 'Succees', detail: 'User Responded', sticky: true});
  }

}