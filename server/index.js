const express = require("express");
const app = express();

// Where we are passing the variable
// Res = Response : Sending info to frontend
// Req = Request: Request info from frontend
// '/' = the page or location. We could have another page such as '/login'
app.get("/", (req, res) => {
	res.send("Hell world");
});

app.listen(3001, () => {
	console.log("Running on port 3001");
});
