import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Heading } from "@chakra-ui/layout";
import { Game } from "../Types";
import getCroppedImageUrl from "../utils/image-url";
import CriticScore from "./CriticScore";
import Emogi from "./Emogi";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card h="100%">
      <Image loading="lazy" src={getCroppedImageUrl(game.background_image)} />
      <CardBody flex="1 0 0%">
        <Flex h="100%" justifyContent="space-between" flexDir="column">
          <Box>
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize="2xl">{game.name}</Heading>
          </Box>
          <Emogi rating={game.rating_top} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
