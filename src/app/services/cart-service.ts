import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
 
  private dataProduct:any

  private cart:[]

  private company: any
  
  constructor(private producService:ProductService) { }

  ngOnInit() 
  {
   
  }

  getProducts()
  {
    return this.dataProduct
  }

  getCart()
  {
    return this.cart
  }

  addCompany(company:any)
  {
    this.company.push(company)
  }

  getCompany()
  {
    return this.company
  }
}
