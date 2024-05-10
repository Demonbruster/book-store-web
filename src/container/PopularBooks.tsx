"use client"

import SmallCard from "@/components/common/SmallCard";
import TitleText from "@/components/common/TitleText";
import useBookStore from "@/store/bookStore";
import useCartStore from "@/store/cartStore";
import { Grid } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function PopularBooks() {
  const router = useRouter();
  const books = useBookStore((state) => state.popular)
  const { addToCart } = useCartStore();
  const handleRoute = (id: number) => {
    router.push('book/' + id)
  }

  return (
    <>
      <TitleText value="Popular books" />
      <Grid>
        {books.map((book) => (
          <Grid.Col key={`popular-book-${book.id}`} span={{ lg: 6, sm: 12 }}>
            <SmallCard {...book} onClick={() => handleRoute(book.id)} btnClick={() => addToCart(book)} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}