const router = require("express").Router();
const {
  Intro,
  About,
  Skill,
  Experience,
  Project,
  Education,
  Achievement,
  Contact,
} = require("../models/portfoliomodel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const skills = await Skill.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const educations = await Education.find();
    const achievements = await Achievement.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      skills: skills,
      experiences: experiences,
      projects: projects,
      educations: educations,
      achievements: achievements,
      contacts: contacts,
    });
  } catch (err) {
    console.error("Error fetching portfolio data:", err);
    res.status(500).send(err);
  }
});

module.exports = router;
