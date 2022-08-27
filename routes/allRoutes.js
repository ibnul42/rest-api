const express = require("express");
const router = express.Router();
const {
  getLanguageList,
  getToneList,
  getToneDetail,
  getUseCaseList,
  getUseCaseDetail,
  postRyte,
} = require("../controllers/allControllers");

router.route("/languages").get(getLanguageList);
router.route("/tones").get(getToneList);
router.route("/tones/:id").get(getToneDetail);
router.route("/usecases").get(getUseCaseList);
router.route("/usecases/:id").get(getUseCaseDetail);
router.route("/ryte").post(postRyte);

module.exports = router;
