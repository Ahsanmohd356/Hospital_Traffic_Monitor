import { useEffect, useState } from "react";
import MetricCard from "../components/MetricCard";
import DepartmentStatus from "../components/DepartmentStatus";
import AlertBox from "../components/AlertBox";
import {
  fetchMetrics,
  fetchDepartments,
  fetchAlerts
} from "../services/api";

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchMetrics().then(res => setMetrics(res.data));
    fetchDepartments().then(res => setDepartments(res.data));
    fetchAlerts().then(res => setAlerts(res.data));
  }, []);

  if (!metrics) return <p>Loading dashboard...</p>;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={grid3}>
        <MetricCard title="Avg Wait Time" value={`${metrics.avg_wait_time} min`} />
        <MetricCard title="Bed Occupancy" value={`${metrics.bed_occupancy}%`} danger={metrics.bed_occupancy > 85} />
        <MetricCard title="Staff Available" value={metrics.staff_available} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <DepartmentStatus data={departments} />
      </div>

      <AlertBox alerts={alerts} />
    </div>
  );
}

const grid3 = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px"
};
