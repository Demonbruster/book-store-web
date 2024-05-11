"use client"

import React, { useMemo } from 'react'
import useCartStore from "@/store/cartStore";
import { ActionIcon, Button, Divider, Grid, NumberFormatter, NumberInput, Text } from "@mantine/core";
import { IconTrash } from '@tabler/icons-react';

export default function Cart() {
  const { cart, discount, subtotal, changeQty, addDiscount, removeFromCart } = useCartStore();

  const total = useMemo(() => subtotal - discount, [subtotal, discount])

  return (
    <>
      <Grid>
        {cart.map((item) => (
          <React.Fragment key={`cart-${item.book.id}`}>
            <Grid.Col span={4}>
              <Text>{item.book.title}</Text>
              <Text>{item.book.author}</Text>
            </Grid.Col>
            <Grid.Col span={2}>
              <NumberFormatter prefix="$ " thousandSeparator value={item.book.price} />
            </Grid.Col>
            <Grid.Col span={2}>
              <NumberInput value={item.qty} onChange={(value) => changeQty(item.book, +value, (item.qty <= +value))} />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberFormatter prefix="$ " thousandSeparator value={item.total} />
            </Grid.Col>
            <Grid.Col span={1}>
              <ActionIcon variant='filled' color="red" onClick={() => removeFromCart(item.book)}>
                <IconTrash />
              </ActionIcon>
            </Grid.Col>
          </React.Fragment>
        ))}
        <Grid.Col span={12}>
          <Divider />
        </Grid.Col>
        <Grid.Col span={9}>
          <Text>Sub total</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberFormatter prefix="$ " thousandSeparator value={subtotal} />
        </Grid.Col>

        <Grid.Col span={9}>
          <Text>Discount</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberInput prefix="$ " thousandSeparator value={discount} onChange={(value) => addDiscount(+value)} />
        </Grid.Col>

        <Grid.Col span={9}>
          <Text>Total</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberFormatter prefix="$ " thousandSeparator value={total} />
        </Grid.Col>


        <Grid.Col span={12}>
          <Button fullWidth disabled={cart.length === 0} variant='filled' radius="md">
            Check out
          </Button>
        </Grid.Col>
      </Grid>
    </>
  )
}
