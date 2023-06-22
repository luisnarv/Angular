import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'Primer-App-Angular-eCommerce';
  http = inject(HttpClient);
   constructor(private router: Router) {};
  //una lista de productos que se inicializa  vacio
  Product: Producto[] = [];
   category = ["opcion1","opcion2", "opcion3"]

   inputData: string[] = [""];

   guardarDatos(id: string){
    console.log(this.inputData,"entro en guardar datos")
    // const busqueda = 
    const queryParams = { myString: this.inputData };
    this.router.navigate(['/search',id], { queryParams });
//       this.router.navigate(['/search',id], { fragment: 'top', state:busqueda });
this.inputData =[""];
   }
}
