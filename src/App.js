import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ComingSoon from "./pages/ComingSoon";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
// import ScrollToTop from "./ScrollToTop";



function App() {


  return (

    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
