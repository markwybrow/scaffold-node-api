const router = require("express").Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Handles get requests to /products"
	});
});

router.post("/", (req, res, next) => {
	const product = {
		name: req.body.name,
		price: req.body.price
	}
	res.status(201).json({
		message: "Handles post requests to /products",
		createdProduct: product
	});
});

router.get("/:productId", (req, res, next) => {
	const id = req.params.productId;
	res.status(200).json({
		id: id,
		message: `productId: ${id}`
	});
});

router.patch("/:productId", (req, res, next) => {
	const id = req.params.productId;
	res.status(201).json({
		message: `Updated product ${id}`
	});
});

router.delete("/:productId", (req, res, next) => {
	const id = req.params.productId;
	res.status(200).json({
		message: `Deleted product ${id}`
	});
});

module.exports = router;
