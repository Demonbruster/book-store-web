"use client"

import Carousel from "@/components/common/Carousel";
import TitleText from "@/components/common/TitleText";
import useBookStore from "@/store/bookStore";

export default function YouMightLike () {
  const you_might_like = useBookStore((state) => state.you_might_like);
  return (
    <>
    <TitleText value="You might like"/>
    <Carousel data={you_might_like} />
    </>
  );
}