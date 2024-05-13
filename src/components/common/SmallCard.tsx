import { IBook } from "@/types/Book";
import { Badge, Button, Card, Grid, Group, Image, MantineStyleProps, NumberFormatter, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

export interface ICardProps extends Omit<IBook, 'Id'> {
  price: number;
  onClick: () => void;
  btnClick: () => void;
  style?: MantineStyleProps;
}

const SmallCard: React.FC<ICardProps> = (props) => {
  const { cover_image, title, author, description, price, onClick, btnClick, style } = props;

  return (
    <Card shadow="md" p="xs" radius="md" withBorder {...style}>
      <Grid>
        <Grid.Col span={3} onClick={onClick}>
          <Image src={cover_image} height={160} alt={title} />
        </Grid.Col>
        <Grid.Col span={9}>
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
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default SmallCard;
