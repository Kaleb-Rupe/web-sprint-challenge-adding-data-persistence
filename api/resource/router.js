// build your `/api/resources` router here
const router = require("express").Router();
const Resource = require("./model");

router.get("/", (req, res, next) => {
  Resource.getAllResources(req.params.body)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.get("/:resource_id", (req, res, next) => {
  Resource.getResourceById(req.params.resource_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

//eslint-disable-next-line
router.use("*", (err, req, res, next) => {
  res.status(500).json({
    customeMessage: "Something went wrong inside the resource router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
