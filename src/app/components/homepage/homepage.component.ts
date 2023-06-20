import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../models/product.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  http = inject(HttpClient);
  Product: Producto[] = []; 
  
  ngOnInit() {
    this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.Product = data.slice(0,4);
      })
  }
  
  
}
