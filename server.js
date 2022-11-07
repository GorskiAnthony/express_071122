// j'importe mon app
const app = require("./src/index.js");
const PORT = process.env.PORT || 5500;

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Server is listening on port ${PORT}`);
	}
});
