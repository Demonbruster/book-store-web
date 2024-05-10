import SearchBar from "@/components/common/SearchBar";
import { Avatar, Flex, Grid } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

const Header = () => {
  return (
    <Grid visibleFrom="xs" align="center" mt="xs">
      <Grid.Col span={1.5} pl="xl">
        Logo
      </Grid.Col>
        <Grid.Col span="auto">
          <SearchBar
            placeholder="Search by user or reservation..."
            radius="md"
            size="md"
          />
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