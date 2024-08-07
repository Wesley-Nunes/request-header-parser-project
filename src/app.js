import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const __dirname = import.meta.dirname;
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static(__dirname + '/views'));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
	const address = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
	const dividerAddres = address.lastIndexOf(':');
	const ipaddress = address.substring(dividerAddres + 1);

	const language = req.headers['accept-language'];

	const software = req.headers['user-agent'];

	res.json({ ipaddress, language, software });
});

app.listen(port, () => console.log(`Your app is listening on localhost:${port}`));


