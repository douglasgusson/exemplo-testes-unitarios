export class NotificationService {
  sendEmail(to: string, message: string): void {
    console.log(`📨 Email enviado para ${to}: ${message}`);
  }
}

export class OrderService {
  constructor(private notificationService: NotificationService) {}

  placeOrder(email: string): string {
    this.notificationService.sendEmail(email, "Seu pedido foi confirmado!");
    return "Pedido realizado com sucesso";
  }
}
