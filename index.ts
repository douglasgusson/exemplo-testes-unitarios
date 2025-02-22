import { Cart, type Product } from "./src/cart";
import { NotificationService, OrderService } from "./src/order-service";
import { PaymentService, type PaymentDetails } from "./src/payment-service";

const cart = new Cart();
const produto1: Product = { id: 1, name: "Notebook", price: 3000 };
const produto2: Product = { id: 2, name: "Mouse", price: 150 };
const produto3: Product = { id: 3, name: "Teclado", price: 200 };

cart.addItem(produto1);
cart.addItem(produto2);
cart.addItem(produto3);

console.table(cart.getItems(), ["name", "price"]);

console.log("🛒 Valor total do carrinho:", cart.getTotal());

const paymentDetails: PaymentDetails = {
  cardNumber: "1234567812345678",
  cardHolder: "João Silva",
  amount: cart.getTotal(),
};

const paymentService = new PaymentService();

const paymentAccepted = paymentService.processPayment(paymentDetails);

if (paymentAccepted) {
  console.log("💳 Pagamento aprovado");
}

const notificationService = new NotificationService();
const orderService = new OrderService(notificationService);

const email = "cliente@email.com";
const orderMessage = orderService.placeOrder(email);

console.log("📦", orderMessage);
