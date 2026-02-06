import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const fetchMetrics = () => API.get("/metrics");
export const fetchLiveTraffic = () => API.get("/traffic/live");
export const fetchDepartments = () => API.get("/departments");
export const fetchAlerts = () => API.get("/alerts");
