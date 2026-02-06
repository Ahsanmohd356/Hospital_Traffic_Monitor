export default function MetricCard({ title, value, danger }) {
  return (
    <div style={{
      background: "#ffffff",
      borderRadius: "16px",
      padding: "22px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
    }}>
      <p style={{ color: "#6b7280", fontSize: "14px" }}>{title}</p>

      <h2 style={{ fontSize: "26px", fontWeight: "700" }}>
        {value}
      </h2>

      <span style={{
        color: danger ? "#dc2626" : "#16a34a",
        fontSize: "13px",
        fontWeight: "500"
      }}>
        Status: {danger ? "High" : "Normal"}
      </span>
    </div>
  );
}
