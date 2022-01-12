import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { smallImage } from "../util";
const DeveloperHero = () => {
  const { developer } = useSelector((state) => state);

  return (
    <div>
      {developer.length ? (
        <StyledDeveloper
          style={{
            backgroundImage: `url(${smallImage(
              developer[0].image_background,
              1920
            )})`,
          }}
        >
          <div>
            <h2 className="title">{developer[1].name}</h2>
            <p>
              Join now to get free access to {developer[1].games_count} games
            </p>
            <button>Join Now</button>
          </div>
        </StyledDeveloper>
      ) : null}
    </div>
  );
};

const StyledDeveloper = styled(motion.div)`
  width: 100%;
  padding: 8rem 0;
  color: white;
  margin: 0rem 0 2rem 0;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
  border-radius: 0.7rem;

  text-transform: uppercase;

  overflow-x: hidden;
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 8rem 4rem;
    .title {
      font-size: 1.5rem;
    }
  }
  div {
    transition: transform 0.4s ease-in-out;
    position: absolute;
    backdrop-filter: blur(12px);
    padding: 1rem;
    left: 50%;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 50%;

    h2 {
      font-size: 3rem;
    }
    p {
      font-weight: 400;
    }
    button {
      width: 20%;
      margin-top: 2rem;
      padding: 0.5rem 1rem;
      background: white;
      border: none;
      border-radius: 16px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      text-transform: uppercase;
      font-family: "Oswald";
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.25s ease;
      &:hover {
        background: rgba(0, 0, 0, 0.7);
        color: white;
      }
      @media (max-width: 768px) {
        width: 70%;
      }
    }
  }
`;
export default DeveloperHero;
