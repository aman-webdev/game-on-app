import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
const Category = ({ details }) => {
  const { image_background, name, games_count } = details;
  const mainStyle = {
    backgroundImage: `url(${smallImage(image_background, 600)})`,
  };

  return (
    <Link to={`/genre/${name}`}>
      <StyledCategory style={mainStyle}>
        <GenreInfo>
          <h3>{name}</h3>
          <p>Total Games : {games_count}</p>
        </GenreInfo>
      </StyledCategory>
    </Link>
  );
};
const StyledCategory = styled(motion.div)`
  min-height: 30vh;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;
  border-radius: 0.8rem;
  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  color: white;
  cursor: pointer;

  font-family: "Roboto";
  padding: 1rem;
  position: relative;
  &:hover {
    div {
      transform: translateX(-50%);
    }
  }
`;

const GenreInfo = styled(motion.div)`
  text-align: center;
  backdrop-filter: blur(2px);
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.25s ease;
  h3 {
    font-size: 1.5rem;
    font-family: "Oswald", sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 1rem 0 0.5rem 0;
  }
  p {
    font-size: 0.9rem;
  }
`;

export default Category;
