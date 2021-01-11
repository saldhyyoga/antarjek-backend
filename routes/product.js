const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
const middleware = require("./../middleware");
const upload = require("./../config/multer").upload2;

router.post(
  "/add/product",
  middleware.admin,
  upload.single("photo"),
  productController.addProduct
);
router.get("/products", productController.productLists);
router.put("/product/:id", middleware.admin, productController.updateProduct);

module.exports = router;
