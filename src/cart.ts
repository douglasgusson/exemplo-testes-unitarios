export interface Product {
  id: number;
  name: string;
  price: number;
}

export class Cart {
  private items: Product[] = [];

  addItem(product: Product) {
    this.items.push(product);
  }

  removeItem(productId: number) {
    this.items = this.items.filter((item) => item.id !== productId);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getItems(): Product[] {
    return this.items;
  }
}
