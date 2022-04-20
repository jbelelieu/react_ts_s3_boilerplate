import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from './container/Home';

function App() {
  return (
    <>
      <Header />

      <div className="holder">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
