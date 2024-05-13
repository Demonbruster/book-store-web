import useCartStore from "@/store/cartStore";
import { Button, Flex, Text, Title } from "@mantine/core";
import { IFormValues, useCheckoutFormCtx } from "./checkout-form.context";

export default function Confirmation() {
  const { subtotal, discount ,pay } = useCartStore();
  const form = useCheckoutFormCtx();
  const val  = form.getValues() as IFormValues;
  return (
    <>
      <Title> $ {subtotal - discount}</Title> 
      <Text> {val.shipping_details.streetAddress}, {val.shipping_details.city}, {val.shipping_details.country}, {val.shipping_details.postalCode}</Text>
      <Button fullWidth variant='filled' radius="md" onClick={pay}>
        Pay
      </Button>
    </>
  )
}