import { Component, Input, inject } from '@angular/core';
import { Producto } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  http = inject(HttpClient);

  Product: Producto[] = [];

  @Input() product: Producto ={
    title:"",
    price:0,
    images: [],
    category:" ",
    description:" ",
    id:0,
  } ;

  ngOnInit() {
    this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.Product = data;
      })
  }


}
