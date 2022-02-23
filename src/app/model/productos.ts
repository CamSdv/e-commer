import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Productos {
  ID!: number
  Producto!: string;
  Descripcion!: string
  Stock!: number
  Img!: string
  Precio!: number
}

const productos: Productos[] = [{
  ID: 1,
  Producto: 'Teclado gamer HyperX Alloy Elite 2 QWERTY Red español',
  Descripcion: 'Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto, y hacer que tus jugadas alcancen otro nivel.',
  Stock: 3,
  Img: 'https://http2.mlstatic.com/D_NQ_NP_2X_912377-MCO44266207808_122020-F.webp',
  Precio: 549500
}, {
  ID: 2,
  Producto: 'Mouse de juego Logitech G Series Hero G502 kda',
  Descripcion: 'Adaptado a tus movimientos: El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.',
  Stock: 5,
  Img: 'https://clonesyperifericos.com/wp-content/uploads/2021/05/1-17.jpg',
  Precio: 172700
}, {
  ID: 3,
  Producto: 'B450M Steel Legend - ASRock',
  Descripcion: 'Soporte CPU AM4 - Tipo de CPU - Ryzen Series - Chipset - AMD Promontory B450',
  Stock: 2,
  Img: 'https://http2.mlstatic.com/D_NQ_NP_2X_990474-MCO42505723572_072020-F.webp',
  Precio: 670000
}, {
  ID: 4,
  Producto: 'A500 Dual Fan CPU Cooler - Corsair',
  Descripcion: 'Reduzca la temperatura de su CPU con el refrigerador para CPU de doble ventilador de alto rendimiento CORSAIR A500, equipado con cuatro tubos térmicos de cobre de contacto directo y dos ventiladores CORSAIR ML120.',
  Stock: 7,
  Img: 'https://clonesyperifericos.com/wp-content/uploads/2020/10/1-9.jpg',
  Precio: 226900
}, {
  ID: 5,
  Producto: 'Memoria RAM Vengeance LPX gamer color negro 16GB 2 Corsair CMK16GX4M2B3200C16',
  Descripcion: 'Potencia tu PC: Con su tecnología DDR4, mejorará el desempeño de tu equipo, ya que opera en 3 y 4 canales, generando mayor fluidez y velocidad en la transferencia de datos. ¡Optimizá al máximo el rendimiento de tu ordenador!',
  Stock: 6,
  Img: 'https://http2.mlstatic.com/D_NQ_NP_2X_797555-MLA48282016555_112021-F.webp',
  Precio: 397900

}, {
  ID: 6,
  Producto: 'Redragon Diti K585RGB',
  Descripcion: 'Con este teclado de una mano de Redragon potencia al máximo tu experiencia gamer. Al estar conformado únicamente por las teclas clásicas que todo jugador utiliza, notarás una gran diferencia en relación con otros tipos de dispositivos. Además, su tamaño compacto te permitirá ganar más espacio y comodidad a la hora de darle un uso intensivo en plena partida.',
  Stock: 9,
  Img: 'https://http2.mlstatic.com/D_NQ_NP_2X_765588-MLA46334284915_062021-F.webp',
  Precio: 150600
}];

@Injectable()
export class Service {

  @Output() addCarrito = new EventEmitter()

  getProductos() {
    const lidstaProducto = productos;
    return of(lidstaProducto);
   }
}