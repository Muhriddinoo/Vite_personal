import "./App.css";
import About from "./component/About";
import Header from "./component/Header";
import Main from "./component/Main";
import Service from "./component/Service";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
// import Carusel from "./component/Carusel";

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Service />
      <Project />
      {/* <Carusel /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
