import styled from "styled-components";
import { motion } from "framer-motion";
const MainContainer = styled(motion.div)`
  padding: 3rem 5rem;
  @media (max-width: 576px) {
    padding: 2rem;
  }
`;

export default MainContainer;
