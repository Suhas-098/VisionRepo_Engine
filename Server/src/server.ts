import express, { type Request, type Response } from "express";
// import cors from "cors";
import dotenv from "dotenv";
import router from './routes/routes.js';
import dashboardRouter from './routes/dashboard.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
// app.use(cors());
app.use(express.json());

//dashboard routes
app.use("/api/dashboard", dashboardRouter);

//analytics routes
app.use("/api", router);


//test route
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});



app.listen(PORT, () => console.log(`Server is alive and running on port http://localhost:${PORT}`));

