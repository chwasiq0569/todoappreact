import "./App.css";
import Home from "./pages/Home/Home";
import CreatePage from "./pages/CreatePage/CreatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePage from "./pages/UpdatePage/Updatepage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
