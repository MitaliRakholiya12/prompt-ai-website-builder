import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  const project = await Project.create({
    userId: req.user,
    name: req.body.name,
    prompt: req.body.prompt,
    config: req.body.config,
  });

  res.json(project);
};

export const getProjects = async (req, res) => {
  const projects = await Project.find({ userId: req.user });
  res.json(projects);
};
