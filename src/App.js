// Import styles
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Import pages
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <About />
      <Footer />
    </div>
  );
}

export default App;
