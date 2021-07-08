// Import styles
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

//animations
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/portfolio/:id">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
