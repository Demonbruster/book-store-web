import { Autocomplete, AutocompleteProps, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export interface SearchBarProps extends AutocompleteProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search Here",
  ...rest
}) => {
  const leftSection = (
    <IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
  );

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
