import { createFormContext } from '@mantine/form';
import {IShippingDetails } from '@/types/Customer';

export interface IFormValues {
  shipping_details: IShippingDetails
  paid: boolean
}

export const [ CheckoutFormProvider, useCheckoutFormCtx, useCheckoutForm ] = createFormContext();
