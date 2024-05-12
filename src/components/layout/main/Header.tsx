import SearchBar from "@/components/common/SearchBar";
import useCartStore from "@/store/cartStore";
import { Avatar, Box, Flex, Grid, Indicator } from "@mantine/core";
import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

const search_path = "/book/search"

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  const isSearch = useMemo(() => pathname === search_path, [pathname])
  const cartBooks = useCartStore(select => select.cart)

  // @ts-ignore
  const qty = useMemo(() => cartBooks.reduce((prev, cur) => (prev || 0) + cur.qty, 0), [cartBooks]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRoute = useCallback((path: string) => router.push(path), [])

  return (
    <Grid align="center" mt="xs">
      <Grid.Col span={1.5} pl="xl" onClick={() => handleRoute("/")}>
        Logo
      </Grid.Col>
      <Grid.Col span="auto">
        {!isSearch && <SearchBar visibleFrom="xs"
          placeholder="Search books.."
          radius="md"
          size="md"
          onClick={() => handleRoute(search_path)}
        />}
      </Grid.Col>
      <Grid.Col span="content">
        <Flex gap="lg" align="center" px="xl">
          <Box hiddenFrom="xs" mt="xs">
            <IconSearch onClick={() => handleRoute(search_path)} />
          </Box>
          <Indicator label={qty}  disabled={qty === 0} mt="xs">
            <IconShoppingCart color="gray" onClick={()=> handleRoute('/cart')} />
          </Indicator>
          <Avatar radius="xl" />
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default Header;
