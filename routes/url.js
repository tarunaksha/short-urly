const express = require("express");
const { handleGenerateNewShortURL, handleRedirectToURL, handleGetAnalytics } = require("../controllers/url");
const router = express.Router();

router.get("/:shortId", handleRedirectToURL)
router.get("/analytics/:shortId", handleGetAnalytics);
router.post("/", handleGenerateNewShortURL);

module.exports = router;
