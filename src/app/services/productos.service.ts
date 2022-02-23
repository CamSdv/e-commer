import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  @Output() addCarrito = new EventEmitter()

  constructor() { }

  
}
