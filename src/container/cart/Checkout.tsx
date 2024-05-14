"use client"

import React, { useState } from 'react';
import { Stepper, Button, Group, Title, Paper } from '@mantine/core';
import { CheckoutFormProvider, IFormValues, card_schema, shipping_schema, useCheckoutForm } from './checkout-form.context';
import { IShippingDetails } from '@/types/Customer';
import Address from './Address';
import { zodResolver } from 'mantine-form-zod-resolver';

import useCartStore from '@/store/cartStore';
import Payment from './Payment';
import Confirmation from './Confirmation';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mantine/hooks';

const initialBilling: IShippingDetails = {
  firstName: '',
  city: '',
  country: '',
  email: '',
  phone: '',
  streetAddress: '',
  postalCode: '',
};

export default function Checkout() {
  const router = useRouter();
  const { subtotal, discount, addShippingDetails, pay } = useCartStore();

  const [active, setActive] = useState(0);

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const form = useCheckoutForm({
    mode: 'uncontrolled',
    initialValues: {
      shipping_details: initialBilling,
      paid: false,
      shipping_details_as_same_as_billing_details: true,
      card: {
        cvc: '',
        expiry: '',
        focus: 'number',
        name: '',
        number: '',
      }
    },
    validate: zodResolver(active === 0 ? shipping_schema : card_schema),
  });

  const handleFormSubmit = (values: unknown) => {
    const castedValues = values as IFormValues;
    addShippingDetails(castedValues.shipping_details);
  };


  const nextStep = () => {
    form.onSubmit(handleFormSubmit);

    if (active === 2) pay()

    if (form.isValid()) setActive((current) => (current < 3 ? current + 1 : current));
  };
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <CheckoutFormProvider form={form}>
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stepper size='xs' active={active} onStepClick={setActive}>
          <Stepper.Step label="Details" description={!isSmallScreen && "Billing & Shipping details"}>
            <Address />
          </Stepper.Step>
          <Stepper.Step label="Payment" description={(!isSmallScreen ? "Make payment" : "") + "$ " + (subtotal - discount)}>
            <Payment />
          </Stepper.Step>
          <Stepper.Step label="Confirmation" description={!isSmallScreen && "List of orders"}>
            <Confirmation />
          </Stepper.Step>
          <Stepper.Completed>
            <Paper shadow="xs" p="xl" radius="md" mt="xl">
              <Title order={1}>Thank you for purchasing!!!</Title>
              <Button variant="outline" mt="lg" onClick={() => router.push('/')}>
                Continue Shopping
              </Button>
            </Paper>
          </Stepper.Completed>
        </Stepper>

        {active !== 3 && <Group justify="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" onClick={nextStep}>
            {active === 2 ? "Pay" : "Next step"}
          </Button>
        </Group>}
      </form>
    </CheckoutFormProvider>
  );
}
