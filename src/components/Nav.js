import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loadSearchedGames } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Nav = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "FETCH_SEARCHED", payload: [] });
    dispatch(loadSearchedGames(term));
    setTerm("");
    history.push(`/search/term=${term}`);
  };

  return (
    <Header>
      <StyledNav>
        <Logo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-device-gamepad"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            width="50px"
            stroke="#F08FC0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M6 12h4m-2 -2v4" id="chng" />
            <line x1="15" y1="11" x2="15" y2="11.01" />
            <line x1="18" y1="13" x2="18" y2="13.01" />
          </svg>
          <h3>Game On</h3>
        </Logo>
        <NavList>
          <Link to="/">Discover</Link>

          <Link to="/wishlist">Wishlist</Link>
        </NavList>
        <Profile>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shopping-cart-plus"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9B88D0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
            <path d="M15 6h6m-3 -3v6" />
          </svg>
        </Profile>
      </StyledNav>
      <Form onSubmit={formSubmitHandler}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          ype="text"
          placeholder="Search for games"
        />
      </Form>
    </Header>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: #f08fc0;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  align-items: center;

  gap: 0.75rem;
  svg {
    width: 65px;
  }
  svg:hover {
    fill: #f08fc0;
    cursor: pointer;

    line,
    path[id] {
      stroke: #393e46;
    }
  }
`;
const NavList = styled(motion.ul)`
  list-style: none;
  flex: 0.6;
  display: flex;
  justify-content: space-evenly;
  a {
    color: #393e46;
    opacity: 0.9;

    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    &:hover {
      opacity: 1;
      color: #393e46;
      font-weight: 600;
    }
  }
`;
const Profile = styled(motion.div)`
  display: flex;
  svg {
    width: 25;
    cursor: pointer;
  }
`;

const Header = styled(motion.div)`
  padding: 0 5rem;
  height: 20vh;
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const Form = styled(motion.form)`
  text-align: center;
  margin: 1rem 0rem;
  input {
    width: 100%;
    padding: 0.75rem 0.75rem;
    background: #f7f6f2;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
    border: none;
    outline: none;
    color: #393e46;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    &::placeholder {
      opacity: 0.4;
      color: #393e46;
    }
  }
`;

export default Nav;
