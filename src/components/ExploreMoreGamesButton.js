import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ExploreMoreGamesButton = ({ type }) => {
  const dispatch = useDispatch();
  const emptyGamesHandler = () => {
    dispatch({ type: "FETCH_UPCOMING", payload: [] });
    dispatch({ type: "FETCH_POPULAR", payload: [] });
    dispatch({ type: "FETCH_NEW", payload: [] });
  };

  return (
    <Link to={`/explore/${type}`}>
      <StyledMore
        onClick={emptyGamesHandler}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
      </StyledMore>
    </Link>
  );
};

const StyledMore = styled(motion.svg)`
  width: 35px;
  fill: teal;
  cursor: pointer;
`;

export default ExploreMoreGamesButton;
