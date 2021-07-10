import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StickyNav>
      <StyledNav>
        <h1>
          <Link id="logo" to="/">
            <code>{`<CristiDev />`}</code>
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </StyledNav>
    </StickyNav>
  );
};

const StickyNav = styled.div`
  position: sticky;
`;

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #ffffff;
  box-shadow: 0 10px 6px -6px #cfcfcf;
  position: relative;

  &:before,
  &:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 400px;
    background: #777;
    box-shadow: 0 15px 10px #616161;
    transform: rotate(-3deg);
  }
  &:after {
    transform: rotate(3deg);
    right: 10px;
    left: auto;
  }
  a {
    text-decoration: none;
    color: #f54f33;
    font-weight: bold;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.6rem;
    font-weight: bold;
  }
  li {
    padding-left: 6rem;
    position: relative;
  }
`;

export default Nav;
