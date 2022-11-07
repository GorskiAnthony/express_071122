const router = require("express").Router();

const db = require("../config/db");

// GET
router.get("/", (req, res) => {
	db.query("SELECT * FROM knight")
		.then(([results]) => {
			res.json(results);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error retrieving products from db.");
		});
});

// POST
router.post("/", (req, res) => {
	// console.log(req.body);
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
});
// PUT
router.put("/:id", (req, res) => {
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
});

// DELETE
router.delete("/:id", (req, res) => {
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
});

module.exports = router;
