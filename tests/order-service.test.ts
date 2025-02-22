import { beforeEach, describe, expect, test, mock } from "bun:test";
import { type NotificationService, OrderService } from "../src/order-service";

describe("Serviço de Pedido", () => {
  let notificationServiceMock: NotificationService;
  let orderService: OrderService;

  beforeEach(() => {
    notificationServiceMock = {
      sendEmail: mock(),
    } as NotificationService;

    orderService = new OrderService(notificationServiceMock);
  });

  test("deve enviar email ao realizar pedido", () => {
    const email = "cliente@email.com";
    orderService.placeOrder(email);

    expect(notificationServiceMock.sendEmail).toHaveBeenCalledWith(
      email,
      "Seu pedido foi confirmado!"
    );
  });

  test("deve retornar mensagem de pedido realizado", () => {
    expect(orderService.placeOrder("cliente@email.com")).toBe(
      "Pedido realizado com sucesso"
    );
  });
});
