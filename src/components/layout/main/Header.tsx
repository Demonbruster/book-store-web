import SearchBar from "@/components/common/SearchBar";
import { Avatar, Flex, Grid } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

const search_path= "/book/search"

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  const isSearch = useMemo(() => pathname === search_path, [pathname])

  return (
    <Grid visibleFrom="xs" align="center" mt="xs">
      <Grid.Col span={1.5} pl="xl">
        Logo
      </Grid.Col>
      <Grid.Col span="auto">
        {!isSearch && <SearchBar
          placeholder="Search books.."
          radius="md"
          size="md"
          onClick={()=> router.push(search_path)}
        />}
      </Grid.Col>
      <Grid.Col span="content">
        <Flex gap="lg" align="center" px="xl">
          <IconShoppingCart color="gray" />
          <Avatar radius="xl" />
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default Header;