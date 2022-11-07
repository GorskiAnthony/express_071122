const db = require("../config/database");

const getAll = (req, res) => {
	db.query("SELECT * FROM knight")
		.then(([results]) => {
			res.json(results);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error retrieving products from db.");
		});
};

const postKnight = (req, res) => {
	const { name, age, is_dubbed } = req.body;
	db.query("INSERT INTO knight (name, age, is_dubbed) VALUES (?, ?, ?)", [
		name,
		age,
		is_dubbed,
	])
		.then(([result]) => {
			res.json(result);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const updateKnight = (req, res) => {
	const { id } = req.params;
	const { is_dubbed } = req.body;

	db.query("UPDATE knight SET is_dubbed = ? WHERE id = ?", [is_dubbed, id])
		.then(() => {
			res.json({ message: "Knight updated" });
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const deleteKnight = (req, res) => {
	db.query("DELETE FROM knight WHERE id = ?", [req.params.id])
		.then(([result]) => {
			if (result.affectedRows)
				return res.status(204).json({ message: "Knight deleted" });
			else res.status(404).json({ message: "Knight not found" });
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

module.exports = {
	getAll,
	postKnight,
	updateKnight,
	deleteKnight,
};
