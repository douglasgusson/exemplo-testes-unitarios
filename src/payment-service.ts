export interface PaymentDetails {
  cardNumber: string;
  cardHolder: string;
  amount: number;
}

export class PaymentService {
  processPayment(details: PaymentDetails): boolean {
    if (!this.isValidCard(details.cardNumber)) {
      throw new Error("Cartão inválido");
    }
    return true;
  }

  private isValidCard(cardNumber: string): boolean {
    return /^[0-9]{16}$/.test(cardNumber);
  }
}
