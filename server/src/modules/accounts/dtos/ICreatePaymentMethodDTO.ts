interface ICreatePaymentMethodDTO {
  name: string;
  card_number: string;
  cpf: string;
  expiresAt: string;
  cvv: number;
}

export { ICreatePaymentMethodDTO };
