import dynamic from "next/dynamic"

const SearchBooks = dynamic(() => import("@/container/SearchBooks"), {ssr: false})

export default function page() {
  return (
    <SearchBooks />
  )
}
