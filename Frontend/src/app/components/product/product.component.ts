import { Component, Input, inject, Injectable } from '@angular/core';
import { Producto } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductServiceService],

})

@Injectable()
export class ProductComponent {


  constructor(private router: Router,  private http: HttpClient, private service: ProductServiceService) { }

  // http = inject(HttpClient);

  //una lista de productos que se inicializa  vacio
  Product: Producto[] = [];

  //       titulo tipo de dato
  @Input() title: string = "";

  // se inicializa nuestro componente pero no se le pasan valores es valido, pero no es considerado
  // como buenas practicas
  // @Input() product!: Producto ;
  //esto tambien es valido y es considerado como buenas practicas  
  @Input() product: Producto = {
    productName: "",
    price: 0,
    img: [],
    category: " ",
    description: " ",
    id: "",
  };

  trackByFn(index: number, item: any): number {
    return item.id; // Devuelve un identificador único para cada elemento
  }

// https://api.escuelajs.co/api/v1/products
// ngOnInit() { 
//   console.log("esto es data")
//   this.http.get<Producto[]>('http://localhost:3002/Product/allproducts')
//     .subscribe((data) => {
//       console.log(data)
//       // this.Product = data; 
//       // console.log(data,"esto es data")
//       // this.service.setItem("products", data);
//     })
// }

  ngOnInit() { 
    console.log("esto es data")
    this.http.get<Producto[]>('http://localhost:3002/Product/allproducts')
      .subscribe(data => {
        this.Product = data;
        this.service.setItem("products", data);
      })
  }

  async Detail(id: string) {
    const result = this.service.getItem("products");
    this.Product= result;

    try {
      console.log( this.service.products)
      const productosFiltrados = this.Product.filter((producto) => producto.id === id);
      await this.router.navigate(['/product', id], { fragment: 'top', state: { productosFiltrados } });
    } catch (error) {
      console.error('Ocurrió un error al redirigir', error);
    }
  }
}
