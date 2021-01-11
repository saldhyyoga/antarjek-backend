const db = require("../models");
const response = require("../res");
const cloudinary = require("./../config/cloudinary");

exports.addProduct = async (req, res) => {
  try {
    const { product_name, cafe_name, price } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path);

    const product = await db.product.create({
      product_photo: result.secure_url,
      product_name,
      cafe_name,
      price,
    });

    return response.ok(product, res);
  } catch (error) {
    console.log(error);
    response.error(`${error}`, res, 500);
  }
};

exports.productLists = async (req, res) => {
  try {
    const result = await db.product.findAll();
    return response.ok(result, res);
  } catch (error) {
    response.error(`${error}`, res, 500);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, cafe_name, price } = req.body;
    const result = await db.product.update(
      {
        product_name,
        cafe_name,
        price,
      },
      {
        where: { id },
      }
    );

    return response.ok(result, res);
  } catch (error) {
    response.error(`${error}`, res, 500);
  }
};
