import "./App.css";
import Home from "./pages/Home/Home";
import CreatePage from "./pages/CreatePage/CreatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
