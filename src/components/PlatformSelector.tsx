import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatfoms";
import useGameQueryStore from "../store";
import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";

const PlatformSelector = () => {
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatform = useGameQueryStore((s) => s.setPlatform);

  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {data?.results.find((p) => p.id === selectedPlatform)?.name ||
          "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => setPlatform(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
