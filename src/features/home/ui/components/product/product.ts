import { Component, Input } from '@angular/core';
import { API_URL, IMAGE_URL } from 'types/const';
import { CommonModule } from '@angular/common';
import { IProduct } from 'features/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input() product!: IProduct;
  
  API_URL = API_URL
  IMAGE_URL = IMAGE_URL
  productImage = ''
  constructor() {
    
  }
  ngOnInit() {
    this.productImage = this.product.images[0] === "https://placehold.co/600x400" ? "https://placehold.co/600x400" : `${IMAGE_URL}${this.product.images[0]}`; 
  }
}
