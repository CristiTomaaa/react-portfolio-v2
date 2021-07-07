import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          <code>{`<CristiDev />`}</code>
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Porfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </StyledNav>
  );
};

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
