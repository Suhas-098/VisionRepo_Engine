import { getDashboardMetrics, getRepositoriesHealth } from "../dashboard/dashboard.service.js";
import type { Request, Response } from "express";

export const fetchDashboardMetrics = async (req: Request, res: Response) => {
    const metrics = await getDashboardMetrics();
    res.json(metrics);
}

export const fetchRepositoriesHealth = async (req: Request, res: Response) => {
    const repositories = await getRepositoriesHealth();
    res.json(repositories);
}   