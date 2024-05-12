import { PaymentMethod } from "@/types/Customer";
import { Group, Radio } from "@mantine/core";

export const PaymentMethods: { [key: string]: string }[] = Object.entries(PaymentMethod).map(([key, value]) => ({ key, value }));

export default function Payment() {
  return (
    <Radio.Group
      label="Payment method"
      description="Select your payment method"
      withAsterisk
    >
      <Group mt="xs">
        {PaymentMethods.map((va,index) => ( <Radio key={index} value={va['key']} label={va['value']} />))}
      </Group>
    </Radio.Group>
  )
}
