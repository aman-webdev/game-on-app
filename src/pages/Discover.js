import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadNewGames,
  loadPopularGames,
  loadUpcomingGames,
} from "../actions/gamesAction";
import { loadGenres } from "../actions/genreAction";
import { loadDevelopers } from "../actions/developerAction";
import Genre from "../components/Genre";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Game from "../components/Game";
import DeveloperHero from "../components/DeveloperHero";
import GameDetail from "../components/GameDetail";
import { GamesList } from "../components/GamesList";
import MainContainer from "../components/MainContainer";
import ExploreMoreGamesButton from "../components/ExploreMoreGamesButton";

const Discover = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_UPCOMING", payload: [] });
    dispatch({ type: "FETCH_POPULAR", payload: [] });
    dispatch({ type: "FETCH_NEW", payload: [] });
    dispatch(loadNewGames(5));
    dispatch(loadPopularGames(5));
    dispatch(loadUpcomingGames(5));
    dispatch(loadGenres(8));
    dispatch(loadDevelopers(2));
  }, [dispatch]);

  const { upcomingGames, popularGames, newGames } = useSelector(
    (state) => state.games
  );
  const genres = useSelector((state) => state.genre);

  const isLoading = useSelector((state) => state.isLoading);

  return (
    <MainContainer>
      {!isLoading ? <GameDetail /> : null}
      <DeveloperHero />
      {genres.length ? (
        <div>
          <h2>Browse by Genre</h2>

          <Genre />
        </div>
      ) : null}
      {popularGames.length ? (
        <div>
          <GameTypeInfo>
            <h2>Explore Popular Games</h2>
            <ExploreMoreGamesButton type="popular" />
          </GameTypeInfo>
          <GamesList>
            {popularGames.map((game) => (
              <Game game={game} key={game.id} />
            ))}
          </GamesList>
        </div>
      ) : null}
      {newGames.length ? (
        <div>
          <GameTypeInfo>
            <h2>Explore New Games</h2>
            <ExploreMoreGamesButton type="new" />
          </GameTypeInfo>
          <GamesList>
            {newGames.map((game) => (
              <Game game={game} key={game.id} />
            ))}
          </GamesList>
        </div>
      ) : null}
      {upcomingGames.length ? (
        <div>
          <GameTypeInfo>
            <h2>Explore Upcoming Games</h2>

            <ExploreMoreGamesButton type="upcoming" />
          </GameTypeInfo>
          <GamesList>
            {upcomingGames.map((game) => (
              <Game game={game} key={game.id} />
            ))}
          </GamesList>
        </div>
      ) : null}
    </MainContainer>
  );
};

const GameTypeInfo = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    h2 {
      font-size: 1.125rem;
    }
  }
`;
export default Discover;
