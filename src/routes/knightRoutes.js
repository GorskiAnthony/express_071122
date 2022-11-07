const router = require("express").Router();
const knightHandlers = require("../handlers/knightHandlers");

// GET
router.get("/", knightHandlers.getAll);

// POST
router.post("/", knightHandlers.postKnight);

// PUT
router.put("/:id", knightHandlers.updateKnight);

// DELETE
router.delete("/:id", knightHandlers.deleteKnight);

module.exports = router;
