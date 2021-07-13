import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: white;
  font-family: 'Inter', sans-serif;
}

html {
  @media (max-width: 1700px){
    font-size: 75%;
  }
}

button {
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 4rem;
  border: 2px solid #F54F33;
  background: transparent;
  background-color: #FFFFFF; 
  color: #F54F33;
  transition: all 0.3s ease;
  border-radius: 4rem;
  font-family: 'Inter', sans-serif;
  &:hover{
    background-color: #F54F33;
    color: white;
  }
}

h2 {
  font-weight: lighter;
  font-size:  4rem;
}
h3 {
  color: #F54F33;
}
h4 {
  font-weight: bold;
}
span {
  font-weight: bold;
  color: #F54F33;
}
a {
  font-size: 1.1rem;
}
p {
  padding: 3rem 0rem;
  color: #949494;
  font-size: 1.4rem;
  line-height: 150%;
}

`;

export default GlobalStyle;
