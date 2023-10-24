import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Booklist from "./components/Booklist/Booklist";
import BookDetails from "./components/BookDetails/BookDetails";
import { AppProvider } from "./context";
import './index.css'
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="book" element={<Booklist />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </AppProvider>
    
  );
}

export default App;
