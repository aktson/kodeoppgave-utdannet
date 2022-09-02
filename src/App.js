import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Favourite from "./components/pages/Favourite";
import { UsersProvider } from "./context/UsersContext";

function App() {
  return (
    <UsersProvider>
      <Router>
        <Header />
        <main >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </UsersProvider>
  );
}

export default App;
