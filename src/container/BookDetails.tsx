"use client"

import { generateRandomNumber } from "@/lib/utils";
import useBookStore from "@/store/bookStore";
import { Badge, Button, Grid, Group, Image, NumberFormatter, Text } from "@mantine/core";
import { IconArrowLeft, IconShoppingCart } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function BookDetails({ id }: { id: number }) {
  const router = useRouter()
  const books = useBookStore(state => state.books)

  const book = useMemo(() => books.find(bk => bk.id === id)
    , [books, id])

  if (typeof book === 'undefined') return <>
    There are no book in the Id
  </>

  const handleClick = () => { }
  return (
    <>
      <Button mb="xs" radius="md" leftSection={<IconArrowLeft />} onClick={() => router.back()}>
        Back
      </Button>
      <Grid>
        <Grid.Col span={{ lg: 6, sm: 12 }}>
          <Image
            src={book.cover_image}
            // height={160}
            // w={200}
            alt={book.title}
          />
        </Grid.Col>
        <Grid.Col span={{ lg: 6, sm: 12 }}>
          <Group justify="space-between" mt="md" mb="xs">
            <Group>
              <Text fw={500}>{book.title}</Text>
              <Text fw={300} fs="oblique">{book.author}</Text>
            </Group>
            {/* <Group> */}
            <Badge color="pink">
              <NumberFormatter prefix="$ " thousandSeparator value={book.price} />
            </Badge>
            <Button color="blue" fullWidth mt="md" radius="md" onClick={handleClick} rightSection={<IconShoppingCart />}>
              Add to cart
            </Button>
            {/* </Group> */}
          </Group>

          <Group justify="left" mt="md" mb="xs">
            {book.genre.map((genre, index) => (
              <Badge key={`genre-${index}`} color="gray">
                <Text c="white">
                  {genre}
                </Text>
              </Badge>
            ))}
          </Group>

          <Text size="sm" c="dimmed" mt="sm">
            {book.description}
          </Text>

        </Grid.Col>
      </Grid>
    </>
  )
}