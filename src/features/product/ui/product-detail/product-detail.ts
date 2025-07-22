import { HttpClient } from '@angular/common/http';
import { Component, Input, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'features/product/model/product.model';
import { API_URL } from 'types/const';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  @Input() product = signal(undefined);
  readonly slug: string;
  private route = inject(ActivatedRoute);
  constructor(private http: HttpClient) {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
  }

  ngOnInit() {
    this.http.get(`${API_URL}/product/${this.slug}`).subscribe({
      next: (data: any) => {
        this.product.set(data.data);
      },
      error: (err: any) => {
        console.error('HTTP Error:', err);
      }
    });
  }
}

