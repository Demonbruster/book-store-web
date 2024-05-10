import { Autocomplete, AutocompleteProps, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const SearchBar = (props: AutocompleteProps) => {
  const {
    placeholder = "Search Here",
    leftSection = (
      <IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    ),
    ...rest
  } = props;
  return (
    <Autocomplete
      w="100%"
      placeholder={placeholder}
      leftSection={leftSection}
      {...rest}
    />
  );
};

export default SearchBar;