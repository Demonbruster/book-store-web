import { IBook } from "@/types/Book";
import { Badge, Button, Card, Grid, Group, Image, MantineStyleProps, NumberFormatter, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

export type ICard = Omit<IBook, 'Id'> & { price: number, onClick: () => void } & { style?: MantineStyleProps }

export default function SmallCard(props: ICard) {
  return (
    <Card
      shadow="md"
      p="xs"
      radius="md"
      withBorder
    >
      <Grid>
        <Grid.Col span={3}>
          <Image
            src={props.cover_image}
            height={160}
            // w={200}
            alt={props.title}
          />
        </Grid.Col>
        <Grid.Col span={9}>
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


          <Button color="blue" fullWidth mt="md" radius="md" onClick={props.onClick} rightSection={<IconShoppingCart />}>
            Add to cart
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  )
}