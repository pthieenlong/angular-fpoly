import { Component, Input } from '@angular/core';
import { API_URL, IMAGE_URL } from '../../../../types/const';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input() product: any;
  
  API_URL = API_URL
  IMAGE_URL = IMAGE_URL
  constructor() {
    console.log(this.product);
  }
}
