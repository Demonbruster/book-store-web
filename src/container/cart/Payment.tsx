import { Box, Flex, Grid, Group, InputBase, Radio, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IMaskInput } from "react-imask";
import { ChangeEventHandler, useState } from "react";
import Card, { Focused } from 'react-credit-cards-2';

interface ICard {
  cvc: string,
  expiry: string,
  focus: Focused,
  name: string,
  number: string,
}

const customMask = function (value:string) {
  var pattern = new RegExp(/^(0[1-9]|1[0-2])(\/|-)([0-9]{2})+$/i);

  console.log(value, pattern.test(value), typeof value);
  return pattern.test(value);
};

export default function Payment() {
  const [card, setCard] = useState({
    cvc: '',
    expiry: '',
    focus: 'number',
    name: '',
    number: '',
  } as ICard)

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;

    setCard((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const fc = evt.target.name as Focused;
    setCard((prev) => ({ ...prev, focus: fc }));
  }

  return (
    <Flex justify="center" >
      <Box w={300} pr="md" visibleFrom="md">
        <Card
          cvc={card.cvc}
          expiry={card.expiry}
          focused={card.focus}
          name={card.name}
          number={card.number}
        />
      </Box>

      <Box>

        <InputBase
          component={IMaskInput}
          mb="xs"
          w={300}
          name="number"
          withAsterisk
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
          withAsterisk
          placeholder="Name"
          value={card.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />

        <Flex justify="flex-start">
          <InputBase
            component={IMaskInput}
            mb="xs"
            mr="xs"
            w={200}
            name="expiry"
            withAsterisk
            placeholder="MM / YY"
            // mask={customMask}
            mask="00/00"
            value={card.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <InputBase
            component={IMaskInput}
            mask="000"
            mb="xs"
            w={90}
            name="cvc"
            withAsterisk
            placeholder="CVC"
            value={card.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Flex>
      </Box>
    </Flex>
  )
}
