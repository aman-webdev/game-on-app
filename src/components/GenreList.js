import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GamesList } from "./GamesList";
import { useLocation } from "react-router";
import loadCategory from "../actions/gameCategoryAction";
import { useDispatch } from "react-redux";
import Game from "./Game";
import GameDetail from "./GameDetail";
import MainContainer from "./MainContainer";

const GenreList = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname.split("/")[2];

  useEffect(() => {
    dispatch({ type: "CLEAR_CATEGORY", payload: [] });
    dispatch(loadCategory(location.toLowerCase()));
  }, [dispatch, location]);

  const category = useSelector((state) => state.category);
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <MainContainer>
      {!isLoading && <GameDetail />}
      <GamesList>
        {category.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </GamesList>
    </MainContainer>
  );
};

export default GenreList;
