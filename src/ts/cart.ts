import Buyable from './buyable';

export default class Cart {
  private items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }

  getAll(): Buyable[] {
    return [...this.items];
  }

  getTotalPrice(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  getTotalPriceWithDiscount(discount: number): number {
    return this.getTotalPrice() - (this.getTotalPrice() * discount) / 100;
  }

  deleteItem(id: number): void {
    const requiredItemIndex = this.items.findIndex(item => item.id === id);
    if (requiredItemIndex !== -1) {
      this.items.splice(requiredItemIndex, 1);
    }
  }
}
