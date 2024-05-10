import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel as MCarousel } from '@mantine/carousel';
import Card from "./Card";
import { IBook } from "@/types/Book";
import { generateRandomNumber } from "@/lib/utils";
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useRouter } from "next/navigation";


export interface ICarousel {
  data: IBook[]
}

export default function Carousel({ data }: ICarousel) {
  const router = useRouter();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const handleClick = (id: number) => {
    router.push('book/' + id)
  }

  const slides = data.map((item) => (
    <MCarousel.Slide key={item.title}>
      <Card
        {...item}
        onClick={() => {
          handleClick(item.id)
        }} />
    </MCarousel.Slide>
  ));

  return (
    <MCarousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      align="start"
      withIndicators
      slidesToScroll={mobile ? 1 : 2}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </MCarousel>
  );
}