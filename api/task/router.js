const router = require("express").Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  Task.getAllTasks(req.params.body)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.get("/:task_id", (req, res, next) => {
  const { task_id } = req.params;
  Task.findTaskById(task_id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const task = req.body;

  Task.addTasks(task)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

//eslint-disable-next-line
router.use("*", (err, req, res, next) => {
  res.status(500).json({
    customeMessage: "Something went wrong inside the task router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
