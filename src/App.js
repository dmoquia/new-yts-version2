import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleMovie from "./pages/SingleMovie";
import Error from "./pages/Error";
import Navbar from "./component/Navbar";
import PopularDownload from "./pages/PopularDownload";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<PopularDownload />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
