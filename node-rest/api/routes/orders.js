const router = require("express").Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Handles get requests to /orders"
	});
});

router.post("/", (req, res, next) => {
	const order = {
		productId: req.body.productId,
		quantity: req.body.quantity
	}
	res.status(201).json({
		message: "Handles post to create /orders",
		order
	});
});

module.exports = router;
