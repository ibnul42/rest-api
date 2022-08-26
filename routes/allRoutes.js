const express = require("express");
const router = express.Router();
const {
  getLanguageList,
  getToneList,
  getToneDetail,
  getUseCaseList,
  getUseCaseDetail,
} = require("../controllers/allControllers");

router.get("/languages", getLanguageList);
router.get("/all-tones", getToneList);
router.get("/tones/:id", getToneDetail);
router.get("/usecases", getUseCaseList);
router.get("/usecases/:id", getUseCaseDetail);

module.exports = router;
