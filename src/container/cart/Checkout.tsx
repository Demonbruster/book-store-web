"use client"

import React, { useState } from 'react';
import { Stepper, Button, Group, Title } from '@mantine/core';
import { CheckoutFormProvider, IFormValues, useCheckoutForm } from './checkout-form.context';
import { IShippingDetails } from '@/types/Customer';
import Address from './Address';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { phoneRegEx, postalCodeRegEx, } from '@/lib/utils';
import useCartStore from '@/store/cartStore';
import Payment from './Payment';
import Confirmation from './Confirmation';
import { useRouter } from 'next/navigation';


const initialBilling: IShippingDetails = {
  firstName: '',
  city: '',
  country: '',
  email: '',
  phone: '',
  streetAddress: '',
  postalCode: '',
}

const schema = z.object({
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
      message: 'Invalid postal code format, ex: 0000'
    })
  }),
})

export default function Checkout() {
  const router = useRouter();
  const { subtotal, discount, addShippingDetails } = useCartStore();

  const form = useCheckoutForm({
    mode: 'uncontrolled',
    initialValues: {
      shipping_details: initialBilling,
      paid: false,
      shipping_details_as_same_as_billing_details: true,
    },
    validate: zodResolver(schema),
  });

  const handleFormSubmit = (values: unknown) => {
    const castedValues = values as IFormValues
    addShippingDetails(castedValues.shipping_details)
  }

  const [active, setActive] = useState(0);
  const nextStep = () => {

    if (active === 0) {
      form.onSubmit(handleFormSubmit)
    }

    if (form.isValid())
      setActive((current) => (current < 3 ? current + 1 : current))
  };
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <CheckoutFormProvider form={form}>
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step label="Details" description="Billing & Shipping details">
            <Address />
          </Stepper.Step>
          <Stepper.Step label="Payment" description={`Make payment $ ${subtotal - discount} `}>
            <Payment />
          </Stepper.Step>
          <Stepper.Step label="Confirmation" description="List of orders">
            <Confirmation />
          </Stepper.Step>
          <Stepper.Completed>
            <>
              <Title>
                Thank you for purchasing!!!
              </Title>
              <Button mt="md" onClick={() => router.push('/')}>More shopping</Button>
            </>
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Back</Button>
          <Button type='submit' onClick={nextStep}>Next step</Button>
        </Group>
      </form>
    </CheckoutFormProvider>
  );
}
