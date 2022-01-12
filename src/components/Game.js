import styled from "styled-components";
import { motion } from "framer-motion";
import loadDetail from "../actions/gameDetailAction";
import { useDispatch } from "react-redux";
import AddtoWishlistButton from "./AddtoWishlistButton";
import { smallImage } from "../util";
const Game = ({ game }) => {
  const dispatch = useDispatch();
  const { background_image, name, id } = game;

  const gameDetailHandler = (id) => {
    dispatch(loadDetail(id));
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {background_image && (
        <StyledGame
          onClick={() => gameDetailHandler(id)}
          style={{
            backgroundImage: `url(${smallImage(background_image, 600)})`,
          }}
        >
          <GameInfo>
            <h3>{name}</h3>
            <AddtoWishlistButton game={game} />
          </GameInfo>
        </StyledGame>
      )}
    </>
  );
};
const StyledGame = styled(motion.div)`
  text-align: center;

  height: 30vh;
  border-radius: 8px;
  overflow: hidden;
  font-family: "Oswald", sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  background-size: cover;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
    div {
      transform: translateX(-50%);
      svg {
        opacity: 1;
      }
    }
  }
`;
const GameInfo = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  right: 0%;
  bottom: 0;
  color: white;
  font-size: 0.85rem;
  letter-spacing: 1px;
  backdrop-filter: blur(3px);
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  svg {
    opacity: 0;
  }
`;
export default Game;
