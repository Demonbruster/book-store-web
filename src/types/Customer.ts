export interface IShippingDetails {
  firstName: string;
  lastName?: string;
  city: string;
  country: string;
  postalCode: string;
  streetAddress: string;
  email: string;
  phone: string;
  deliveryInstructions?: string; // Optional field for delivery instructions
}
