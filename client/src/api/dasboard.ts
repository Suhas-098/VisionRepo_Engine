import { apiClient } from "./client";

export function getDashboard() {
    return apiClient("/api/dashboard/metrics");
}