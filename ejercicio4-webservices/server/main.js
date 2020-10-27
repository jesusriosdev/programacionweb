var express = require("express");
var app = express();
var server = require("http").Server(app);
const fs = require("fs");

app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"X-Requested-With, Content-type,Accept,X-Access-Token,X-Key"
	);

	res.header("Access-Control-Allow-Origin", "*");
	next();
});

const dataPath = "server/data/persons.json";

const readFile = (callback, returnJson = false, filePath) => {
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			throw err;
		}

		callback(returnJson ? JSON.parse(data) : data);
	});
};

const writeFile = (fileData, callback, filePath) => {
	fs.writeFile(filePath, fileData, "utf8", (err) => {
		if (err) {
			throw err;
		}

		callback();
	});
};

app.get("/hello", (req, res) => {
	res.status(200).send("Hello World!");
});

app.get("/persons", (req, res) => {
	readFile(
		(data) => {
			res.status(200).send(data);
		},
		true,
		dataPath
	);
});

app.post("/addperson", (req, res) => {
	readFile(
		(data) => {
			const position = Object.keys(data).length; // 5
			data[position] = req.body;

			writeFile(JSON.stringify(data, null, 2), () => {
				res.status(200).send("a new person has been added..");
			});
		},
		true,
		dataPath
	);
});

server.listen(8080, () => {
	console.log("Server is running in http://localhost:8080");
});
