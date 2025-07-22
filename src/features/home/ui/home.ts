import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Product } from './components/product/product';
import { API_URL } from 'types/const';
import { CommonModule } from '@angular/common';
import { IProduct } from 'features/product';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Product],
  templateUrl: './home.html',
})
export class Home {
  brands = [
    {
      id: "versace",
      url: "brands/versace.png",
      alt: "versace",
    },
    {
      id: "gucci",
      url: "brands/gucci.png",
      alt: "gucci",
    },
    {
      id: "prada",
      url: "brands/prada.png",
      alt: "prada",
    },
    {
      id: "ck",
      url: "brands/ck.png",
      alt: "ck",
    },
    {
      id: "zara",
      url: "brands/zara.png",
      alt: "zara",
    },
  ];
  categories = [
    {
      id: 'casual',
      title: 'casual',
      image: '/category/casual.png'
    },
    {
      id: 'formal',
      title: 'formal',
      image: '/category/formal.png'
    },
    {
      id: 'party',
      title: 'party',
      image: '/category/party.png'
    },
    {
      id: 'gym',
      title: 'gym',
      image: '/category/gym.png'
    },
  ];
  bestProducts = signal<IProduct[]>([]);
  newProducts = signal<IProduct[]>([]);
  constructor(private http: HttpClient) {  }
  ngOnInit() {
    this.http.get(`${API_URL}/product/best`).subscribe({
      next: (data: any) => {
        this.bestProducts.set(data.data);
      },
      error: (err: any) => {
        console.error('HTTP Error:', err);
      }
    });
    this.http.get(`${API_URL}/product/new`).subscribe({
      next: (data: any) => {
        this.newProducts.set(data.data);
      },
      error: (err: any) => {
        console.error('HTTP Error:', err);
      }
    });
  }
}
