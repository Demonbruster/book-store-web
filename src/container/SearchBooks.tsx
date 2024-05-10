"use client"

import React, { useMemo } from "react";
import { IBook } from "@/types/Book";
import { MRT_ColumnDef, MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { ActionIcon, Badge, Button, Flex, NumberFormatter, Tooltip } from "@mantine/core";
import { IconArrowLeft, IconEye, IconShoppingCart } from "@tabler/icons-react";
import useBookStore from "@/store/bookStore";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/cartStore";

export default function SearchBooks() {
  const router = useRouter();
  const books = useBookStore((state) => state.books)
  const { addToCart } = useCartStore();

  const columns = useMemo<MRT_ColumnDef<IBook>[]>(() => [
    {
      accessorKey: 'title',
      header: "Title"
    },
    {
      accessorKey: 'author',
      header: 'Author'
    },
    {
      accessorKey: 'genre',
      header: 'Genre',
      Cell: ({ cell }) => {
        return cell.getValue<IBook['genre']>().map((val, index) => <Badge key={index}>{val}</Badge>)
      }
    },
    {
      accessorKey: 'publication_year',
      header: 'Year'
    },
    {
      accessorKey: 'price',
      header: 'Price',
      Cell: ({ cell }) => (<NumberFormatter prefix="$ " thousandSeparator value={cell.getValue<number>()} />)
    },
    {
      accessorKey: 'id',
      header: 'Action',
      enableEditing: false,
      enableSorting: false,
      enableColumnActions: false,
      enablePinning: true,
      size: 80,
      Cell: ({ row }) => (
        <Flex gap="md">
          <Tooltip label="View">
            <ActionIcon color="gray" onClick={() => {
              router.push("/book/" + row.original.id)
            }}>
              <IconEye />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Add to cart">
            <ActionIcon onClick={() => {
              addToCart(row.original)
            }}>
              <IconShoppingCart />
            </ActionIcon>
          </Tooltip>
        </Flex>
      )
    }
  ], [])

  const table = useMantineReactTable({
    columns,
    data: books,
    initialState: { pagination: { pageSize: 5, pageIndex: 1 } },
    state: { showGlobalFilter: true }
  });

  return (
    <>
      <Button mb="xs" radius="md" leftSection={<IconArrowLeft />} onClick={() => router.back()}>
        Back
      </Button>
      <MantineReactTable table={table} />
    </>
  )
}
