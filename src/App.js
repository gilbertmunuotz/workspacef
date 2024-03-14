import Body from "./components/Body";
import Home from "./components/Home";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category1 from "./components/Cat1";
import Category2 from "./components/Cat2";
import Category3 from "./components/Cat3";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> {/* Wrap the entire app with a single BrowserRouter */}
      <div className="App">
        <Navbar />
        <Home />
        <Body />
        <Form />
        <Footer />

        {/* <Routes>
          <Route path="/Category1" element={<Category1 />} />
          <Route path="/Category2" element={<Category2 />} />
          <Route path="/Category3" element={<Category3 />} />
        </Routes> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
