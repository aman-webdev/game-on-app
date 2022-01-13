import styled from "styled-components";
import { motion } from "framer-motion";
import playStation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import { useDispatch, useSelector } from "react-redux";

import AddtoWishlistButton from "./AddtoWishlistButton";
import { smallImage } from "../util";
import { BarLoader } from "react-spinners";

const GameDetail = () => {
  const dispatch = useDispatch();

  const { detail } = useSelector((state) => state.detail);

  const { name, description_raw, background_image, rating, id } = detail;

  const { screenshot } = useSelector((state) => state.detail);

  const isLoading = useSelector((state) => state.isLoading);

  const getRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
        </svg>
      );
    }
    return stars;
  };

  const homePageHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      dispatch({ type: "IS_LOADING" });
      dispatch({
        type: "FETCH_DETAIL",
        payload: { detail: {}, screenshot: [] },
      });
      document.body.style.overflow = "scroll";
    }
  };

  const getPlatformIcons = (name) => {
    switch (name) {
      case "Nintendo Switch":
        return nintendo;
      case "PlayStation 4":
        return playStation;
      case "PlayStation 5":
        return playStation;
      case "PC":
        return steam;
      case "Apple":
        return apple;
      case "Xbox One":
        return xbox;
      default:
        return gamepad;
    }
  };

  return (
    <>
      {!isLoading && id ? (
        <StyledGameDetail className="shadow" onClick={homePageHandler}>
          <Details>
            <Header>
              <img src={smallImage(background_image, 600)} alt="" />
              <Hero>
                <h1>{name}</h1>
                <AddtoWishlistButton game={detail} />
              </Hero>
            </Header>
            <Body>
              <Desc>
                <Top>
                  <Platforms>
                    {detail.platforms
                      ? detail.platforms.map((platform) => (
                          <img
                            key={platform.platform.name}
                            src={getPlatformIcons(platform.platform.name)}
                            alt=""
                          />
                        ))
                      : null}
                  </Platforms>
                  <Stars>
                    {getRatingStars(rating).length
                      ? getRatingStars(rating)
                      : "Rating Not Available"}
                  </Stars>
                </Top>

                <p>{description_raw}</p>
              </Desc>
              <Screenshots>
                {screenshot.map((ss) => (
                  <img
                    src={smallImage(ss.image, 1280)}
                    key={ss.id}
                    alt={ss.image}
                  />
                ))}
              </Screenshots>
            </Body>
          </Details>
        </StyledGameDetail>
      ) : (
        <BarLoader loading />
      )}
    </>
  );
};

const StyledGameDetail = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  right: 0;
  bottom: 0;
  z-index: 100;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.8);

  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: teal;
  }
`;
const Details = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  position: relative;
  left: 10%;
  min-height: 100vh;
  background: white;
  position: absolute;
  @media (max-width: 768px) {
    width: 90%;

    left: 5%;
  }
`;
const Header = styled(motion.div)`
  height: 55vh;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Hero = styled(motion.div)`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    @media (max-width: 576px) {
      font-size: 2rem;
      text-align: center;
    }
  }
  svg {
    width: 40px;
    margin: 0;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const Desc = styled(motion.div)`
  line-height: 1.6;
`;
const Body = styled(motion.div)`
  padding: 2rem 4rem;
  @media (max-width: 576px) {
    padding: 2rem;
  }
`;
const Top = styled(motion.div)`
  padding: 2rem 0;
  padding-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  gap: 1rem;
  img {
    width: 30px;
  }
`;
const Stars = styled(motion.div)`
  display: flex;
  svg {
    fill: teal;
  }
`;
const Screenshots = styled(motion.div)`
  padding: 3rem 0;

  img {
    margin: 1.5rem auto;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;
export default GameDetail;
