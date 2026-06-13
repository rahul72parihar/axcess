import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Callpage from "./pages/Callpage.jsx";
import QueuePage from "./pages/QueuePage.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/queue" element={<QueuePage />} />
      <Route path="/call" element={<Callpage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
