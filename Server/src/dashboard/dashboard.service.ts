import prisma from "../prisma.js";

export const getDashboardMetrics = async () => {
    //this fetches all the repositories
    const repositories = await prisma.repository.findMany();

    //this fetches all the analysis
    const analyses = await prisma.analysis.findMany();

    //now calculate all the issues form all the analysis
    const totalIssues = analyses.reduce((sum, analysis) => sum + analysis.totalIssues, 0);

    //calculate average health score
    const averageHealthScore = repositories.reduce((sum, repo) => sum + repo.healthScore, 0) / (repositories.length || 1);

    //return dashboard metrics
    return {
        totalRepositories: repositories.length,
        totalAnalysis: analyses.length,
        totalIssues,
        averageHealthScore: Math.round(averageHealthScore),
    }
}


export const getRepositoriesHealth = () => {
    return prisma.repository.findMany({
        select: {
            id: true,
            name: true,
            techStack: true,
            lastScannedAt: true,
            healthScore: true,
            riskLevel: true,
        }
    })
}
