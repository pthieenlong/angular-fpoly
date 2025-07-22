export interface IProduct {
  _id: string,
  name: string,
  slug: string,
  price: number,
  images: string[];
  salePercent: number,
  isSale: boolean,
  category: string[],
  rating: number,
  colors: string[],
  sizes: string[],
  isVisible: boolean,
  updatedAt: Date,
  createdAt: Date
}