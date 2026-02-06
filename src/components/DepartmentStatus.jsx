export default function DepartmentStatus({ data }) {
  const getColor = (status) => {
    if (status === "High") return "#dc2626";
    if (status === "Medium") return "#f59e0b";
    return "#22c55e";
  };

  return (
    <div style={card}>
      <h3>Department Status</h3>

      {data.map((d) => {
        const percent = Math.round((d.patients / d.capacity) * 100);

        return (
          <div key={d.name} style={{ marginBottom: "18px" }}>
            <strong>{d.name}</strong>
            <p>{d.patients} / {d.capacity} ({percent}%) – {d.status}</p>

            <div style={barBg}>
              <div style={{
                height: "8px",
                width: `${percent}%`,
                background: getColor(d.status),
                borderRadius: "6px"
              }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const card = {
  background: "white",
  padding: "22px",
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
};

const barBg = {
  width: "100%",
  height: "8px",
  background: "#e5e7eb",
  borderRadius: "6px"
};

