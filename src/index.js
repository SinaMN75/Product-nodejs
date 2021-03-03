const productRouter = require("./routes/product");
const Product = require("./models/product");

// const {express} = require("utilities");
// const {connectSequelize} = require("utilities");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use("/api/products", productRouter);
// connectSequelize("nodeSample", "root", "123456789", "mysql", "localhost");

module.exports = {
	productRouter,
	Product,
};