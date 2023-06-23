import { Component, Input, inject, Output, EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { ProductComponent } from '../product/product.component';
import { Router, NavigationExtras  } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ProductComponent, ProductServiceService],
})
export class SearchComponent {
  http = inject(HttpClient);
  constructor(private route: ActivatedRoute, private service: ProductComponent, private serviceProduct: ProductServiceService ) {}

  detail(id: number) { console.log(id,"este es el id");this.service.Detail(id)}

  Product: Producto[] = [];

  @Input() title: string = "";
  @Input() product: Producto = {
    title: "",
    price: 0,
    images: [],
    category: " ",
    description: " ",
    id: 0,
  };


  ngOnInit() {
    this.serviceProduct.conole();
    this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.Product = data;
        const id = this.route.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe(params => {
          const myString = params['myString'];
          // Imprime 'valor del string' 
          const result = data.filter(e => e.title.toLocaleLowerCase().includes(myString.toLocaleLowerCase()))
          result ? this.Product = result : this.Product = data;
          console.log(this.Product)
        });
      });
  }

}
