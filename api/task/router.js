// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require("./model");

router.get("/:task_id", (req, res, next) => {
  Task.getTaskById(req.params.task_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

//eslint-disable-next-line
router.use("*", (err, req, res, next) => {
  res.status(500).json({
    customeMessage: "Something went wrong inside the recipes router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
