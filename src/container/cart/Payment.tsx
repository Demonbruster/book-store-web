import { Box, Flex, InputBase, TextInput, Paper } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { ChangeEventHandler, useState } from "react";
import Card, { Focused } from 'react-credit-cards-2';
import { ICard, useCheckoutFormCtx } from "./checkout-form.context";
import { useMediaQuery } from "@mantine/hooks";

export default function Payment() {
  const form = useCheckoutFormCtx()
  const [card, setCard] = useState({
    cvc: '',
    expiry: '',
    focus: 'number',
    name: '',
    number: '',
  } as ICard)

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;
    setCard((prev) => ({ ...prev, [name]: value }));
    form.setFieldValue('card.'+name, value)
  }

  const handleInputFocus: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const fc = evt.target.name as Focused;
    setCard((prev) => ({ ...prev, focus: fc }));
  }

  return (
    <Flex justify="center" direction={isSmallScreen ? "column" : "row"}>
      <Box pr={{ xs: 'md', md: 0 }} mb="md">
        <Paper px="md" style={{ maxWidth: 350 }}>
          <Card
            cvc={card.cvc}
            expiry={card.expiry}
            focused={card.focus}
            name={card.name}
            number={card.number}
          />
        </Paper>
      </Box>

      <Box>
        <InputBase
          component={IMaskInput}
          mb="xs"
          w={300}
          name="number"
          withAsterisk
          error={form.errors['card.number']}
          placeholder="Card number"
          mask="0000 0000 0000 0000"
          value={card.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />

        <TextInput
          mb="xs"
          w={300}
          name="name"
          error={form.errors['card.name']}
          withAsterisk
          placeholder="Name"
          value={card.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />

        <Flex align="center">
          <InputBase
            component={IMaskInput}
            mb="xs"
            mr="xs"
            w={120}
            name="expiry"
            error={form.errors['card.expiry']}
            withAsterisk
            placeholder="MM / YY"
            mask="00 / 00"
            value={card.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <InputBase
            component={IMaskInput}
            mb="xs"
            w={90}
            name="cvc"
            withAsterisk
            error={form.errors['card.cvc']}
            placeholder="CVC"
            mask="000"
            value={card.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Flex>
      </Box>
    </Flex>
  )
}
