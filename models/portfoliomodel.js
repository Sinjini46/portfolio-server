const mongoose = require("mongoose");

const introschema = new mongoose.Schema({
  welcomeText: { type: String, required: true },
  firstName: { type: String, required: true },
  lastname: { type: String, required: true },
  caption: { type: String, required: true },
  description: { type: String, required: true },
  lottieURl: { type: String, required: true },
});

const aboutSchema = new mongoose.Schema({
  lottieurl: { type: String, required: true },
  description1: { type: String, required: true },
});

const skillSchema = new mongoose.Schema({
  skill: { type: String, required: true },
});

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  period: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
});

const projectsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  sourceCodeLink: { type: String, required: true },
  demoLink: { type: String, required: true },
});

const educationSchema = new mongoose.Schema({
  period: { type: String, required: true },
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  marks: { type: String, required: true },
});

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  description: { type: String, required: true },
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = {
  Intro: mongoose.model("intros", introschema),
  About: mongoose.model("abouts", aboutSchema),
  Skill: mongoose.model("skills", skillSchema),
  Experience: mongoose.model("experiences", experienceSchema),
  Project: mongoose.model("projects", projectsSchema),
  Education: mongoose.model("educations", educationSchema),
  Achievement: mongoose.model("achievements", achievementSchema),
  Contact: mongoose.model("contacts", contactSchema),
};
