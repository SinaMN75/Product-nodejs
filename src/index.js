const {express} = require("utilities");

const {productRouter} = require("./routes/product");
const {connectSequelize} = require("utilities");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/products", productRouter);

connectSequelize("nodeSample", "root", "123456789", "mysql", "localhost");

app.listen(3000, () => console.log("app running on port 3000"));