import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Productos, Service } from 'src/app/model/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [Service]
})
export class ProductosComponent implements OnInit {

  productos: Productos[] = []
  mostrarDescripcion!: boolean
  product: Productos | undefined;
  arryProductos! : Productos[]

  constructor(private _sevProductos: Service, servicioProducto: ProductosService ) {
    this._sevProductos.getProductos().subscribe((x : Productos[])=>{
      this.productos = x
    })
   }

  ngOnInit(): void {
  }

  habilitarDescripcion(event:any){   
    this.mostrarDescripcion = !this.mostrarDescripcion   
  }

  agregarCarrito(event: any){
    let id = event.ID
    let stock = event.Stock
    let producto = this.productos.filter(x => x.ID === id);
    producto.map(function(dato){
      if (dato.Stock == stock) {
        // console.log(dato)
        dato.Stock = event.Stock -1
      }
    })
    this._sevProductos.addCarrito.emit({data: event});
  }

}
