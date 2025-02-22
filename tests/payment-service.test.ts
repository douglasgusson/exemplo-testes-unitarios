import { beforeEach, describe, expect, test } from "bun:test";
import { PaymentService, type PaymentDetails } from "../src/payment-service";

describe('Serviço de Pagamento', () => {
  let paymentService: PaymentService;

  beforeEach(() => {
    paymentService = new PaymentService();
  });

  test('deve processar pagamento com cartão válido', () => {
    const details: PaymentDetails = {
      cardNumber: '1234567812345678',
      cardHolder: 'João Silva',
      amount: 100
    };

    expect(paymentService.processPayment(details)).toBe(true);
  });

  test('deve lançar erro para cartão inválido', () => {
    const details: PaymentDetails = {
      cardNumber: '1234',
      cardHolder: 'João Silva',
      amount: 100
    };

    expect(() => paymentService.processPayment(details)).toThrow('Cartão inválido');
  });
});
