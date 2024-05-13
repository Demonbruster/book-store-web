import { Card as MCard, Image, Text, Badge, Button, Group, NumberFormatter, MantineStyleProps } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import { IBook } from '@/types/Book';

export interface ICard extends Omit<IBook, 'Id'> {
  price: number;
  onClick: () => void;
  btnClick: () => void;
  style?: MantineStyleProps;
}

export default function Card(props: ICard) {
  const { cover_image, title, author, description, price, onClick, btnClick, style } = props;

  return (
    <MCard {...style} shadow="sm" padding="lg" radius="md" withBorder>
      <MCard.Section onClick={onClick}>
        <Image src={cover_image} height={160} alt={title} />
      </MCard.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Group>
          <Text fw={500}>{title}</Text>
          <Text fw={300} fs="oblique">{author}</Text>
        </Group>
        <Badge color="pink">
          <NumberFormatter prefix="$ " thousandSeparator value={price} />
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={btnClick} rightSection={<IconShoppingCart />}>
        Add to cart
      </Button>
    </MCard>
  );
}
