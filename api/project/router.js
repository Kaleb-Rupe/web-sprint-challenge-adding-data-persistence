// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.getAllProjects(req.params.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.get("/:project_id", (req, res, next) => {
  Project.getProjectById(req.params.project_id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const project = req.body;

  Project.addProjects(project)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

//eslint-disable-next-line
router.use("*", (err, req, res, next) => {
  res.status(500).json({
    customeMessage: "Something went wrong inside the projects router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
