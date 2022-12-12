import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
