import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
const AddtoWishlistButton = ({ game }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const wishlistHandler = (e) => {
    e.stopPropagation();

    const index = wishlist.findIndex((g) => game.id === g.id);
    if (index === -1) {
      dispatch({ type: "ADD_WISHLIST", payload: game });
    } else {
      dispatch({ type: "REMOVE_WISHLIST", payload: index });
    }
  };

  const updateSVGHandler = () => {
    const index = wishlist.findIndex((g) => game.id === g.id);
    if (index === -1) {
      return ["transparent", "white"];
    } else {
      return ["#ff5151", "none"];
    }
  };

  return (
    <>
      <SVG
        style={{ cursor: "pointer" }}
        onClick={wishlistHandler}
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-heart"
        viewBox="0 0 24 24"
        strokeLidth="1.5"
        stroke={updateSVGHandler()[1]}
        fill={updateSVGHandler()[0]}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </SVG>
    </>
  );
};
const SVG = styled(motion.svg)`
  width: 30px;
  margin-top: 2rem;

  transition: all 0.2s ease;
  &:hover {
    fill: white;
  }
`;

export default AddtoWishlistButton;
