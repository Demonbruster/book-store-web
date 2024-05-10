import { IBook } from '@/types/Book';
import { Card as MCard, Image, Text, Badge, Button, Group, NumberFormatter, MantineStyleProps } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

export type ICard = Omit<IBook, 'Id'> & { price: number, onClick: () => void, btnClick: () => void } & { style?: MantineStyleProps }

export default function Card(props: ICard) {
  return (
    <MCard {...props.style} shadow="sm" padding="lg" radius="md" withBorder >
      <MCard.Section onClick={props.onClick}>
        <Image
          src={props.cover_image}
          height={160}
          alt={props.title}
        />
      </MCard.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Group>
          <Text fw={500}>{props.title}</Text>
          <Text fw={300} fs="oblique">{props.author}</Text>
        </Group>
        <Badge color="pink">
          <NumberFormatter prefix="$ " thousandSeparator value={props.price} />
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {props.description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={props.btnClick} rightSection={<IconShoppingCart />}>
        Add to cart
      </Button>
    </MCard>
  );
}
