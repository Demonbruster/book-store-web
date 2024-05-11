import dynamic from "next/dynamic"

const BookDetails = dynamic(() => import("@/container/BookDetails"), {ssr: false})

type Props = {
  params: {
    id: string
  }
}

export default function page({ params }: Props) {
  const { id } = params

  const id_as_number = Number(id);

  if (isNaN(id_as_number))
    return <>Id should be number</>

  return (
    <>
      <BookDetails id={id_as_number} />
    </>
  )
}
