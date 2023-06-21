import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primer-App-Angular-eCommerce';
  http = inject(HttpClient);
  //una lista de productos que se inicializa  vacio
  Product: Producto[] = [];

   category = ["opcion1","opcion2", "opcion3"]

  changeTitle() {
    this.title = 'EVOLUTION';
  }

}
