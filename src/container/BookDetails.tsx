"use client"

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import useBookStore from "@/store/bookStore";
import useCartStore from "@/store/cartStore";
import { Badge, Button, Grid, Group, Image, NumberFormatter, Text, Paper, Divider } from "@mantine/core";
import { IconArrowLeft, IconShoppingCart } from "@tabler/icons-react";

export default function BookDetails({ id }: { id: number }) {
  const router = useRouter();
  const books = useBookStore(state => state.books);
  const { addToCart } = useCartStore();

  const book = useMemo(() => books.find(bk => bk.id === id), [books, id]);

  if (!book) {
    return (
      <Text size="xl" mt="xl">
        Book not found!
      </Text>
    );
  }

  const handleClick = () => {
    addToCart(book);
    router.push('/cart');
  };

  return (
    <>
      <Button
        mb="md"
        variant="light"
        color="blue"
        radius="md"
        leftSection={<IconArrowLeft />}
        onClick={() => router.back()}
      >
        Back
      </Button>

      <Grid>
        <Grid.Col>
          <Image src={book.cover_image} alt={book.title} height={400} />
        </Grid.Col>
        <Grid.Col>
          <Paper p="lg" shadow="sm">
            <Text size="xl" fw={600} mb="sm">
              {book.title}
            </Text>
            <Text size="sm" color="dimmed" mb="sm">
              {book.author}
            </Text>
            <Badge color="pink" variant="filled">
              <NumberFormatter prefix="$ " thousandSeparator value={book.price} />
            </Badge>
            <Divider m="md" />
            <Text size="sm" color="dimmed">
              {book.description}
            </Text>
            <Divider m="md" />
            <Group gap="sm">
              {book.genre.map((genre, index) => (
                <Badge key={index} color="gray">
                  <Text size="sm" color="white">
                    {genre}
                  </Text>
                </Badge>
              ))}
            </Group>
            <Button
              fullWidth
              variant="filled"
              color="blue"
              radius="md"
              mt="lg"
              onClick={handleClick}
              rightSection={<IconShoppingCart />}
            >
              Add to cart
            </Button>
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
}
