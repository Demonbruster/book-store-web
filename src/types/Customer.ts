
export interface IBillingDetails {
  firstName: string;
  lastName?: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  streetAddress: string;
  email: string;
  phone: string;
}

export interface IShippingDetails extends IBillingDetails{
  deliveryInstructions?: string; // Optional field for delivery instructions
}

export enum PaymentMethod {
  CREDIT_CARD = "Credit Card",
  DEBIT_CARD = "Debit Card",
  BANK_TRANSFER = "Bank Transfer",
  CASH_ON_DELIVERY = "Cash on Delivery",
}