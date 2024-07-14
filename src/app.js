
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.get("/", function (req, res) {
	res.json({ api: 1 });
});

app.listen(port, () => console.log(`Your app is listening on localhost:${port}`));
