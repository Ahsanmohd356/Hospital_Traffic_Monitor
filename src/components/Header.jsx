import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{
      background: "#1f2937",
      color: "white",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>🏥 Hospital Traffic Monitor</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={link}>Dashboard</Link>
        <Link to="/live" style={link}>Live Monitor</Link>
      </div>
    </div>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500"
};
