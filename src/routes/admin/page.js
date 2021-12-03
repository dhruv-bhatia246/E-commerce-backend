const express = require('express');
const { requireSignin, adminMiddleware } = require('../../common-middleware');
const { createPage, getPage } = require('../../controllers/admin/page');
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const env = require("dotenv");
const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require('multer-storage-cloudinary');

env.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  filename:(req, file, cb) => {
    cb(null, shortid.generate() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post(`/page/create`, requireSignin, adminMiddleware, upload.array('banners'), createPage);

router.get(`/page/:category/:type`, getPage);

module.exports = router;