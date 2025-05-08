import { Component,OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-producto',   
  standalone:true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './producto.component.html',
  styleUrls:  ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  productos: any[] = [];

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data as any[];
    });
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
  }

  irAlCarrito() {
    this.router.navigate(['/carrito']);
  }

  irAInventario() {
    this.router.navigate(['/inventario']);
  }
}

/*export class ProductoComponent implements OnInit{
 productos:any[]=[];
constructor(
  private productoService:ProductoService,
  private carritoService:CarritoService,
  private router:Router
){}
ngOnInit(): void {
  this.productoService.obtenerProductos().subscribe(productos => {
    this.productos = productos;
  }, error => {
    console.error('Error al obtener productos:', error);
  });
}

agregarAlCarrito(producto:any){
this.carritoService.agregarProducto(producto);
alert(`${producto.nombre} ha sido agregado al carrito`);
}
irAlCarrito(){
  this.router.navigate(['/carrito']);
}
irAInventario(){
  this.router.navigate(['/inventario']);
}

}*/
