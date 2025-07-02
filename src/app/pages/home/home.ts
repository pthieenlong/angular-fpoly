import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from './components/product/product';
@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css'
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
  bestProducts: any = [];
  newProducts: any = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get("http://localhost:3000/api/product/best").subscribe({
      next: (data: any) => {
        this.bestProducts = data.data;
      },
      error: (err) => {
        console.error('HTTP Error:', err);
      }
    });
    this.http.get("http://localhost:3000/api/product/new").subscribe({
      next: (data: any) => {
        this.newProducts = data.data;
      },
      error: (err) => {
        console.error('HTTP Error:', err);
      }
    });
    // this.http.get()
  }
  

}
