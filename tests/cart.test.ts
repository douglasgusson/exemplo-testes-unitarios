import { expect, test, describe, beforeEach } from "bun:test";
import { Cart, type Product } from "../src/cart";

describe("Carrinho de Compras", () => {
  let cart: Cart;
  let produto1: Product;
  let produto2: Product;

  beforeEach(() => {
    cart = new Cart();
    produto1 = { id: 1, name: "Notebook", price: 3000 };
    produto2 = { id: 2, name: "Mouse", price: 150 };
  });

  test("deve adicionar um item ao carrinho", () => {
    cart.addItem(produto1);
    expect(cart.getItems()).toContain(produto1);
  });

  test("deve remover um item do carrinho", () => {
    cart.addItem(produto1);
    cart.addItem(produto2);
    cart.removeItem(produto1.id);

    expect(cart.getItems()).not.toContain(produto1);
    expect(cart.getItems()).toContain(produto2);
  });

  test("deve calcular o total corretamente", () => {
    cart.addItem(produto1);
    cart.addItem(produto2);
    expect(cart.getTotal()).toBe(3150);
  });
});
