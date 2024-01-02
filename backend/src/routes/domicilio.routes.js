"use strict";

const express = require("express");

const domiciliocontroller = require("../controllers/domicilio.controller");
const router = express.Router();
const { getDomicilios, uploadPDF } = require("../controllers/domicilio.controller");
const upload = require("../middlewares/pdf.middleware");

router.post("/", (req, res) => {
    domiciliocontroller.createDomicilio(req, res);
  });
router.put("/:DomicilioId", domiciliocontroller.updateDomicilio);
router.route("/:DomicilioId/upload")
    .get(getDomicilios)
    .post((req, res, next) => {
        upload.single("file")(req, res, function(err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            next();
        });
    }, uploadPDF);

module.exports = router;
