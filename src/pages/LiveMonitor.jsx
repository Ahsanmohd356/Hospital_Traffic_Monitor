import { useEffect, useState } from "react";

export default function LiveMonitor() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("Disconnected");

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws/traffic");

    ws.onopen = () => setStatus("Connected");

    ws.onmessage = (e) => {
      setData(JSON.parse(e.data));
    };

    ws.onclose = () => setStatus("Disconnected");

    return () => ws.close();
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h2>Live Hospital Traffic</h2>
      <p>Status: <strong style={{ color: "#16a34a" }}>{status}</strong></p>

      {data && (
        <div style={grid3}>
          <LiveCard title="Total Patients" value={data.total_patients} />
          <LiveCard title="ER Queue" value={data.er_queue} />
          <LiveCard title="ICU Beds Free" value={data.icu_free} />
        </div>
      )}
    </div>
  );
}

function LiveCard({ title, value }) {
  return (
    <div style={{
      background: "#ecfeff",
      padding: "22px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
    }}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

const grid3 = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  marginTop: "20px"
};
