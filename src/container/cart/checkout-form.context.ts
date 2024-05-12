import { createFormContext } from '@mantine/form';
import { IBillingDetails, IShippingDetails, PaymentMethod } from '@/types/Customer';

export interface IFormValues {
  billing_details: IBillingDetails
  shipping_details: IShippingDetails
  payment_method?: PaymentMethod
  paid: boolean
  shipping_details_as_same_as_billing_details: boolean
}

export const [ CheckoutFormProvider, useCheckoutFormCtx, useCheckoutForm ] = createFormContext();
