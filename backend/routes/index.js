const express = require("express");
const router = express.Router();

//Diğer rotaları içe aktarmak iiçin
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const productRoute = require("./products.js");
const couponRoute = require("./coupons.js");
const userRoute = require("./users.js");
const paymentRoute = require("./payment.js");

//Her rotayı ilgili yol altında kullan
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/coupons",couponRoute);
router.use("/users", userRoute);
router.use("/payment", paymentRoute);


module.exports = router;
