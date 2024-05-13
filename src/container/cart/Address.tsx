import { Autocomplete, Grid, InputBase, TextInput } from "@mantine/core";
import { useCheckoutFormCtx } from "./checkout-form.context"
import countries from "@/db/countries";
import { IMaskInput } from "react-imask";

export default function Address() {
  const form = useCheckoutFormCtx();
  return (
    <Grid>
      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="First name"
          placeholder="your first name"
          {...form.getInputProps('shipping_details.firstName')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="Last name"
          placeholder="your last name"
          {...form.getInputProps('shipping_details.lastName')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('shipping_details.email')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <InputBase
          withAsterisk
          component={IMaskInput}
          mask="+00 000 000 0000"
          label="Phone"
          placeholder="phone number"
          {...form.getInputProps('shipping_details.phone')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="Street"
          placeholder="street address"
          {...form.getInputProps('shipping_details.streetAddress')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="City"
          placeholder="city address"
          {...form.getInputProps('shipping_details.city')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <Autocomplete
          withAsterisk
          label="Country"
          placeholder="your country"
          data={countries}
          {...form.getInputProps('shipping_details.country')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <InputBase
          withAsterisk
          component={IMaskInput}
          mask="0000"
          label="Postal code"
          placeholder="your postal code"
          {...form.getInputProps('shipping_details.postalCode')}
        />
      </Grid.Col>
    </Grid>
  )
}
