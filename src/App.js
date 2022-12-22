import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar />
      <Home />
      <About />
      <Services />
      <Contact /> */}

      {/* <Routes>
        <Route exact to="/" component={Home} />
        <Route exact to="/about" component={About} />
        <Route exact to="/service" component={Services} />
        <Route exact to="/contact" component={Contact} />
      </Routes> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
