import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;