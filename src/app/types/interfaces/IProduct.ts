export interface IProduct {
  id: string,
  name: string,
  slug: string,
  price: number,
  images: string[],
  salePercent: number,
  isSale: boolean,
  categories: string[],
  rating: number,
  colors: string[],
  sizes: string[],
  isVisible: boolean,
  updatedAt: string,
  createdAt: string
}