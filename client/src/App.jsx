import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Create from "./pages/Create/Create";
import Read from "./pages/Read/Read";
import Update from "./pages/Update/Update";
import Delete from "./pages/Delete/Delete";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path={`/update/:id`} element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
