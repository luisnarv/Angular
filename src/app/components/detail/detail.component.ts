import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/product.model';
import { CommentsComponent } from '../comments/comments.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private route: ActivatedRoute) {}

  Product: Producto[] = [];

  @Input() title: string = "";

  @Input() product: Producto ={
    title:"",
    price:0,
    images: [],
    category:" ",
    description:" ",
    id:0,
  } ;



  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const state = history.state;
  
    if (state && state.productosFiltrados) {
      const productosFiltrados = state.productosFiltrados;
      // Realiza las operaciones necesarias con productosFiltrados
      this.Product=productosFiltrados;
    }
  }



  // ngOnInit(){
  //   this.route.paramMap.subscribe(params  => {
  //     const data = params.get("price")
  //     console.log("hola",data) ;
  //     })
  // }

}
