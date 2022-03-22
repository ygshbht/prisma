import express from "express";
import router from "./routes/user";
const app = express();

app.use(express.json());

app.use("/api/user", router);

app.get("/", (req, res) => {
	res.send("I am working");
});

app.listen(5000, () => {
	console.log("Listening on port 5000");
});
