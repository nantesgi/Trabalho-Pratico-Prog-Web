import { Payment } from "./Payment";
import { User } from "./User";

export class Checkout {
  id: string;
  user: User;
  payment: Payment;
}
