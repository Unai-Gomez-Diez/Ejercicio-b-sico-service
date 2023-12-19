import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  productos: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productos = this.productService.retornar();

  }
}
