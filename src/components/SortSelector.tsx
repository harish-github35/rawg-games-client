import { Button } from "@chakra-ui/button";
import { HStack, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const selectedOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setOrder = useGameQueryStore((s) => s.setSort);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" }, // add "-" for reverse sort
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average" },
  ];

  const label =
    selectedOrder && sortOrders.find((y) => y.value === selectedOrder)?.label;

  return (
    <Menu>
      <HStack>
        <Text>Order by:</Text>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {label || "Relevance"}
        </MenuButton>
      </HStack>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} onClick={() => setOrder(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
