import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import { GamesList } from "./GamesList";
import Game from "./Game";
import GameDetail from "./GameDetail";
const Search = () => {
  const { searchedGames } = useSelector((state) => state.games);
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <MainContainer>
      {!isLoading && <GameDetail />}
      <GamesList>
        {searchedGames.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </GamesList>
    </MainContainer>
  );
};

export default Search;
