"use client"

import React, { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { CheckoutFormProvider, IFormValues, useCheckoutForm } from './checkout-form.context';
import { IBillingDetails, PaymentMethod } from '@/types/Customer';
import Address from './Address';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { phoneRegExp } from '@/lib/utils';
import useCartStore from '@/store/cartStore';
import Payment from './Payment';


const initialBilling: IBillingDetails = {
  firstName: '',
  address: '',
  city: '',
  country: '',
  email: '',
  phone: '',
  streetAddress: '',
  postalCode: '',
}

const schema = z.object({
  billing_details: z.object({
    firstName:  z.string(),
    address: z.string(),
    city: z.string(),
    country: z.string(),
    email: z.string().email(),
    phone: z.string().regex(phoneRegExp, {
      message: 'Invalid phone number format. Please provide a valid phone number.',
    }),
    streetAddress: z.string(),
    postalCode: z.string()
  }),
  shipping_details: z.object({
    firstName:  z.string(),
    address: z.string(),
    city: z.string(),
    country: z.string(),
    email: z.string().email(),
    phone: z.string().regex(phoneRegExp, {
      message: 'Invalid phone number format. Please provide a valid phone number.',
    }),
    streetAddress: z.string(),
    postalCode: z.string()
  }),
})

export default function Checkout() {
  const { subtotal, discount } = useCartStore();



  const form = useCheckoutForm({
    mode: 'uncontrolled',
    initialValues: {
      billing_details: initialBilling,
      shipping_details: initialBilling,
      paid: false,
      shipping_details_as_same_as_billing_details: true,
      payment_method: undefined,
    }, 
    validate: zodResolver(schema)
  });

  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <CheckoutFormProvider form={form}>
      <React.Fragment>
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step label="Details" description="Billing & Shipping details">
            <Address />
          </Stepper.Step>
          <Stepper.Step label="Payment" description={`Make payment $ ${subtotal - discount} `}>
            <Payment/>
          </Stepper.Step>
          <Stepper.Step label="Confirmation" description="List of orders">
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Back</Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </React.Fragment>
    </CheckoutFormProvider>
  );
}
