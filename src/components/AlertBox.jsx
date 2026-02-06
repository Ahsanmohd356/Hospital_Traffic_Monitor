export default function AlertBox({ alerts }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Recent Alerts</h3>

      {alerts.map((a, i) => (
        <div key={i} style={{
          background: "#eff6ff",
          padding: "14px",
          borderRadius: "10px",
          marginTop: "10px",
          fontWeight: "500"
        }}>
          {a.message}
        </div>
      ))}
    </div>
  );
}
