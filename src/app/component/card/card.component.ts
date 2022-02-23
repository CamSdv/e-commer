import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos, Service } from 'src/app/model/productos';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  listaProductos: Array<any> = [];
  total! : number
  suma! : number 

  constructor(private _sevProductos: Service, public router : Router) {}

  ngOnInit(): void {
    this._sevProductos.addCarrito.subscribe((data : Productos[]) => {
      this.listaProductos.push(data);
       this.suma = 0;
       this.total = 0;
      this.listaProductos.forEach((x ) =>{
        this.total = x.data.Precio
        if (this.listaProductos.length > 1) {
          this.total = this.total
        }
        else{
          this.total
        }
        this.suma += this.total
      })
    })
  }


  comprar(){
    Swal.fire({
      icon: 'success',
      title: 'Gracias por tu compra!',
      text: "En un momento recibira un correo con la información de su pedido",
      confirmButtonText: 'Seguir comprando'
    })
    this.listaProductos.splice(0, this.listaProductos.length)
  }

  
}
