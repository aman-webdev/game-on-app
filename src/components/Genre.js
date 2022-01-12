import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Category from "./Category";
const Genre = () => {
  const genres = useSelector((state) => state.genre);

  return (
    <>
      <StyledGenre>
        {genres.map((genre) => (
          <Category details={genre} key={genre.id} />
        ))}
      </StyledGenre>
    </>
  );
};

const StyledGenre = styled(motion.div)`
  padding: 3rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-gap: 1.5rem;
`;
export default Genre;
