import { Route, Routes } from "react-router-dom";
import Destination from "./Destination";
import Home from "./Home";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
    </Routes>
  );
};

export default Pages;
