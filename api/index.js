import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts/", postRoutes);
app.use("/api/users/", userRoutes);
app.use("/api/auth/", authRoutes);

app.get("/", (req, res) => res.send("Server is running..."));
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Connected! (http://localhost:${PORT})`);
});
