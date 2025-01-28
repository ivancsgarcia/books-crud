import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Create from "./pages/Create/Create";
import Read from "./pages/Read/Read";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Read />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
