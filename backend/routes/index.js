const express = require("express");
const router = express.Router();

//Diğer rotaları içe aktarmak iiçin
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const productRoute = require("./products.js");
const couponRoute = require("./coupons.js");

//Her rotayı ilgili yol altında kullan
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/coupons",couponRoute);

module.exports = router;
