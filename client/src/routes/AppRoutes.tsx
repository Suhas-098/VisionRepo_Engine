import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import AnalyzePage from "@/pages/AnalyzePage";
import DashboardPage from "@/pages/DashboardPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/analyze" element={<AnalyzePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    );
}
