import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello welcome to the studio",
    status: 200,
  });
});
app.listen(3000, () => {
  console.log("application is running on http://localhost:3000");
});
