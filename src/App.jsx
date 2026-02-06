import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import LiveMonitor from "./pages/LiveMonitor";

export default function App() {
  return (
    <>
      <Header />
      <div style={{ background: "#f8fafc", minHeight: "100vh", padding: "24px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/live" element={<LiveMonitor />} />
        </Routes>
      </div>
    </>
  );
}

