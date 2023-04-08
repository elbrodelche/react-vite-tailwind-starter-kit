import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Detail from "./pages/detail/Detail.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  return (
    <ErrorBoundary>
    <Routes>
      <Route path="/details/:id" element={<Detail />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </ErrorBoundary>
  );
}

export default App;
