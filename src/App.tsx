import { Routes, Route } from "react-router-dom";
import Demo1 from "./pages/demo1";
import Demo2 from "./pages/demo2";
import Demo3 from "./pages/demo3";
import Demo4 from "./pages/demo4";
import Demo5 from "./pages/demo5";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Demo1 />} />
      <Route path="/demo2" element={<Demo2 />} />
      <Route path="/demo3" element={<Demo3 />} />
      <Route path="/demo4" element={<Demo4 />} />
      <Route path="/demo5" element={<Demo5 />} />
    </Routes>
  );
}
