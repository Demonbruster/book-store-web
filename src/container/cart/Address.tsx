import { Autocomplete, Grid, TextInput } from "@mantine/core";
import { useCheckoutFormCtx } from "./checkout-form.context"
import countries from "@/db/countries";

export default function Address() {
  const form = useCheckoutFormCtx();
  return (
    <Grid>
      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="First name"
          placeholder="your first name"
          {...form.getInputProps('billing_details.firstName')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="Last name"
          placeholder="your last name"
          {...form.getInputProps('billing_details.lastName')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('billing_details.email')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="Phone"
          placeholder="phone number"
          {...form.getInputProps('billing_details.phone')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="Street"
          placeholder="street address"
          {...form.getInputProps('billing_details.streetAddress')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="City"
          placeholder="city address"
          {...form.getInputProps('billing_details.city')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <Autocomplete
          withAsterisk
          label="Country"
          placeholder="your country"
          data={countries}
          {...form.getInputProps('billing_details.country')}
        />
      </Grid.Col>

      <Grid.Col span={{ sm: 12, lg: 6 }}>
        <TextInput
          withAsterisk
          label="Postal code"
          placeholder="your postal code"
          {...form.getInputProps('billing_details.postalCode')}
        />
      </Grid.Col>
    </Grid>
  )
}
