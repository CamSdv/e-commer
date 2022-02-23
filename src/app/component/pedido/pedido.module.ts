import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from './pedido.component'; 

@NgModule({
  imports: [
    CommonModule,
    PedidoRoutingModule
  ],
  declarations: [PedidoComponent]
})
export class PedidosModule { }
