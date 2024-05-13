import SearchBar from "@/components/common/SearchBar";
import useCartStore from "@/store/cartStore";
import { Avatar, Box, Flex, Grid, Indicator } from "@mantine/core";
import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

const searchPath = "/book/search";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isSearch = useMemo(() => pathname === searchPath, [pathname]);
  const cartBooks = useCartStore((select) => select.cart);

  const qty = useMemo(() => cartBooks.reduce((prev, cur) => prev + cur.qty, 0), [cartBooks]);

  const handleRoute = useCallback((path: string) => router.push(path), [router]);

  return (
    <Grid align="center" mt="xs">
      <Grid.Col span={1.5} pl="xl" onClick={() => handleRoute("/")}>
        Logo
      </Grid.Col>
      <Grid.Col span="auto">
        {!isSearch && (
          <SearchBar
            visibleFrom="xs"
            placeholder="Search books.."
            radius="md"
            size="md"
            onClick={() => handleRoute(searchPath)}
          />
        )}
      </Grid.Col>
      <Grid.Col span="content">
        <Flex gap="lg" align="center" px="xl">
          <Box hiddenFrom="xs" mt="xs" onClick={() => handleRoute(searchPath)}>
            <IconSearch />
          </Box>
          <Indicator label={qty} disabled={qty === 0} mt="xs" onClick={() => handleRoute('/cart')}>
            <IconShoppingCart color="gray" />
          </Indicator>
          <Avatar radius="xl" />
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default Header;
