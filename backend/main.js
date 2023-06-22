const express = require("express");
const app = express();
const cors = require("cors");
// enable all CORS requests
app.use(cors());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const PORT = process.env.PORT || 7400;
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//#region user
const UserRoutes = require("./Routes/usersRoutes");
const logging = require("./MiddleWares/logging");
app.use("/", logging);
app.use("/api/users", UserRoutes);
//#endregion

//#region user
const ResetRoutes = require("./Routes/resetPasswordRoutes");
app.use("/api", ResetRoutes);
//#endregion

//#region ingredients
const IngredientRoutes = require("./Routes/ingredientsRoutes");
app.use("/api/ingredients", IngredientRoutes);
//#endregion


//#region product
const ProductRoutes = require("./Routes/productsRoutes");
app.use("/api/products", ProductRoutes);
//#endregion

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
