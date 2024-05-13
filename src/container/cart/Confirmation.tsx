import useCartStore from "@/store/cartStore";
import { Button, Flex, Text, Title, Divider } from "@mantine/core";
import { IFormValues, useCheckoutFormCtx } from "./checkout-form.context";

export default function Confirmation() {
  const { subtotal, discount, pay, cart } = useCartStore();
  const form = useCheckoutFormCtx();
  const val = form.getValues() as IFormValues;

  return (
    <Flex direction="column" gap="md">
      <Title order={1}>Order Summary</Title>
      <Divider />
      {cart.map((item, index) => (
        <Flex key={index} justify="space-between" align="center">
          <Flex direction="column">
            <Text>{item.book.title}</Text>
            <Text size="xs">Quantity: {item.qty}</Text>
          </Flex>
          <Text>$ {item.total}</Text>
        </Flex>
      ))}
      <Divider />
      <Flex justify="space-between" align="center">
        <Text size="lg">Subtotal:</Text>
        <Text size="lg">$ {subtotal}</Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text size="lg">Discount:</Text>
        <Text size="lg">$ {discount}</Text>
      </Flex>
      <Divider />
      <Flex justify="space-between" align="center">
        <Title order={2}>Total:</Title>
        <Title order={2}>$ {subtotal - discount}</Title>
      </Flex>
      <Divider />
      <Flex>
        <Button fullWidth variant="filled" radius="md" onClick={pay}>
          Pay Now
        </Button>
      </Flex>
    </Flex>
  );
}
