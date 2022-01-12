import { useSelector } from "react-redux";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
const Wishlist = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const wishList = useSelector((state) => state.wishlist);
  return (
    <>
      {!isLoading ? <GameDetail /> : null}
      <Container>
        {wishList.map((game, index) => (
          <Game game={game} key={index} />
        ))}
      </Container>
    </>
  );
};

const Container = styled(MainContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.5rem;

  justify-content: center;
  align-items: center;

  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* max-width: 350px; */
  }
`;

export default Wishlist;
