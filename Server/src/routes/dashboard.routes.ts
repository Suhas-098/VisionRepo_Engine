import { Router } from "express";
import { fetchDashboardMetrics, fetchRepositoriesHealth } from "../controllers/DashboardController.js";

const router = Router();

router.get("/metrics", fetchDashboardMetrics);

router.get("/repositories", fetchRepositoriesHealth);

export default router;
