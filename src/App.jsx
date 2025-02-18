import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

//UTILS
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import ScrollToTop from "./utils/ScrollTop";

function App() {
  const appContext = useContext(AppContext);

  if (appContext.loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
