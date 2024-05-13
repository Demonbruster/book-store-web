import { useCallback, useRef } from 'react';
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel as MCarousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { IBook } from "@/types/Book";
import useCartStore from "@/store/cartStore";

const DynamicCard = dynamic(() => import('./Card'), { ssr: false });

export interface ICarouselProps {
  data: IBook[];
}

export default function Carousel({ data }: ICarouselProps) {
  const router = useRouter();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { addToCart } = useCartStore();

  const handleClick = useCallback((id: number) => {
    router.push(`/book/${id}`);
  }, [router]);

  const handleAddToCart = useCallback((book: IBook) => {
    addToCart(book);
  }, [addToCart]);

  const slides = data.map((book) => (
    <MCarousel.Slide key={book.title}>
      <DynamicCard
        {...book}
        onClick={() => handleClick(book.id)}
        btnClick={() => handleAddToCart(book)}
      />
    </MCarousel.Slide>
  ));

  const handleMouseEnter = () => {
    autoplay.current.stop();
  };

  const handleMouseLeave = () => {
    autoplay.current.reset();
  };

  return (
    <MCarousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      align="start"
      withIndicators
      slidesToScroll={mobile ? 1 : 2}
      plugins={[autoplay.current]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides}
    </MCarousel>
  );
}
