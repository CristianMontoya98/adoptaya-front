import { Adopt } from "./components/Adopt/Adopt";
import {ContactForm} from "./components/contactForm/contactForm" 
import { NavBar } from "./components/NavBar/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail/detail";

import { useState } from "react";
function Container() {
  const [detail, setDetail] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Adopt setDet={setDetail} />} />
          <Route path="/adopt" element={<Adopt setDet={setDetail} />} />
          <Route path="/detail" element={<Detail detail={detail} />} />
          <Route path="/contact" element={<ContactForm detail={detail} />} />
              </Routes>
              
      </BrowserRouter>
    </div>
  );
}
export { Container };
