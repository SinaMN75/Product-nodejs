const {express} = require("utilities");
const {Product} = require("../models/product");

const productRouter = express.Router();

productRouter.post("/", (req, res) => {
	Product.create({title: req.body.title, description: req.body.description})
	       .then((i) => res.status(201).json(i))
	       .catch((e) => res.status(600).json({message: e.message}));
});

productRouter.get("/", (req, res) => {
	Product.findAll()
	       .then((i) => res.json(i))
	       .catch((e) => res.status(600).json({message: e.message}));
});

productRouter.get("/:id", (req, res) => {
	Product.findByPk(req.params.id).then((i) => {
		if (!i) return res.status(404).json({message: "not found"});
		res.json(i);
	}).catch((e) => res.status(600).json({message: e.message}));
});

productRouter.put("/:id", (req, res) => {
	Product.findByPk(req.params.id).then((i) => {
		if (!i) return res.status(404).json({message: "message"});
		if (req.body.title) i.title = req.body.title;
		if (req.body.description) i.description = req.body.description;
		i.save().then((i) => res.json(i));
	}).catch((e) => res.status(600).json({message: e.message}));
});

productRouter.delete("/:id", (req, res) => {
	Product.destroy({where: {id: req.params.id}}).then((i) => {
		if (!i) return res.status(404).json({message: "not found"});
		res.json({message: "message"});
	}).catch((e) => res.status(600).json({message: e.message}));
});

module.exports = {
	productRouter,
};