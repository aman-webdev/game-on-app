import styled from "styled-components";
import { motion } from "framer-motion";

export const GamesList = styled(motion.div)`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 0.8rem;
  justify-content: center;
  grid-row-gap: 0.5rem;
`;
