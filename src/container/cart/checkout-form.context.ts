import { createFormContext } from '@mantine/form';
import { IShippingDetails } from '@/types/Customer';
import { Focused } from 'react-credit-cards-2';
import { z } from 'zod';
import { cardExpireRegEx, cardNumberRegEx, phoneRegEx, postalCodeRegEx } from '@/lib/utils';

export interface ICard {
  cvc: string,
  expiry: string,
  focus?: Focused,
  name: string,
  number: string,
}

export interface IFormValues {
  shipping_details: IShippingDetails
  card: ICard
  paid: boolean
}

export const [CheckoutFormProvider, useCheckoutFormCtx, useCheckoutForm] = createFormContext();

export const shipping_schema = z.object({
  shipping_details: z.object({
    firstName: z.string().min(2),
    city: z.string().min(2),
    country: z.string().min(2),
    email: z.string().email(),
    phone: z.string().regex(phoneRegEx, {
      message: 'Invalid phone number format. Please provide a valid phone number.',
    }),
    streetAddress: z.string().min(2),
    postalCode: z.string().regex(postalCodeRegEx, {
      message: 'Invalid postal code format, ex: 0000',
    }),
  }),

});

export const card_schema = z.object({
  card: z.object({
    cvc: z.string().min(3, {
      message: 'Invalid cvc'
    }),
    expiry: z.string().regex(cardExpireRegEx, {
      message: 'Invalid expire'
    }),
    name: z.string().min(3),
    number: z.string().regex(cardNumberRegEx, {
      message: 'Invalid card number'
    }),
  })
})

