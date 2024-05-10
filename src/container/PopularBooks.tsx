"use client"

import SmallCard from "@/components/common/SmallCard";
import TitleText from "@/components/common/TitleText";
import { generateRandomNumber } from "@/lib/utils";
import useBookStore from "@/store/bookStore";
import { Grid } from "@mantine/core";

export default function PopularBooks() {
  const books = useBookStore((state) => state.popular)
  return (
    <>
      <TitleText value="Popular books" />
      <Grid>
        {books.map((book) => (
          <Grid.Col key={`popular-book-${book.id}`} span={{ lg: 6, sm: 12 }}>
            <SmallCard {...book} price={generateRandomNumber(50, 5000)} onClick={() => { }} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}