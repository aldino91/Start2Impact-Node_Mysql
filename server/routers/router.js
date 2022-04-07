const router = require("express").Router();
const upload = require("../multer/multer");
const {
  index,
  getReport,
  create,
  update,
  Delete,
} = require("../controller/controllerReport");

router.get("/reports", index);

router.get("/reports/:id", getReport);

router.post("/reports", upload.single("image"), create);

router.put("/reports/:id", upload.single("image"), update);

router.delete("/delete/:id", Delete);

module.exports = router;
