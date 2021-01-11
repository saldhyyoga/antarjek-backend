const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dewuaczrl",
  api_key: "421479456239245",
  api_secret: "zO7LztyqG9FYXRPeeOEkhEwr4xc",
});

module.exports = cloudinary;
