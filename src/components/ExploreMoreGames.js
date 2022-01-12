import { useEffect } from "react";
import MainContainer from "./MainContainer";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  loadNewGames,
  loadPopularGames,
  loadUpcomingGames,
} from "../actions/gamesAction";
import { GamesList } from "./GamesList";
import Game from "./Game";
import GameDetail from "./GameDetail";

const ExploreMoreGames = () => {
  const location = useLocation().pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    if (location === "popular") {
      dispatch(loadPopularGames(30));
    }
    if (location === "upcoming") {
      dispatch(loadUpcomingGames(30));
    }
    if (location === "new") {
      dispatch(loadNewGames(30));
    }
  }, [location, dispatch]);

  const { upcomingGames, newGames, popularGames } = useSelector(
    (state) => state.games
  );

  const isLoading = useSelector((state) => state.isLoaining);

  if (location === "popular") {
    return (
      <MainContainer>
        {!isLoading && <GameDetail />}
        <GamesList>
          {popularGames.map((game) => (
            <Game key={game.slug} game={game} />
          ))}
        </GamesList>
      </MainContainer>
    );
  }
  if (location === "new") {
    return (
      <MainContainer>
        {!isLoading && <GameDetail />}
        <GamesList>
          {newGames.map((game) => (
            <Game key={game.slug} game={game} />
          ))}
        </GamesList>
      </MainContainer>
    );
  }
  if (location === "upcoming") {
    return (
      <MainContainer>
        {!isLoading && <GameDetail />}
        <GamesList>
          {upcomingGames.map((game) => (
            <Game key={game.slug} game={game} />
          ))}
        </GamesList>
      </MainContainer>
    );
  }
  return null;
};

export default ExploreMoreGames;
