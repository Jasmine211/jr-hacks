const express = require("express");
const router = express.Router();
const data = require("../data");
const helpers = require("../helpers");
const xss = require("xss");

router.get("/", async (req, res) => {
  try {
    let questions = await data.quiz.getQuestions();
    return res.render("quiz", {
      title: "Quiz",
      question1: questions[0],
      question2: questions[1],
      question3: questions[2],
      question4: questions[3],
      question5: questions[4],
    });
  } catch (e) {
    return res.status(404).render("home");
  }
});
router.post("/", async (req, res) => {
  let answerChoice;
  let answer1 = req.body.answer1;
  let answer2 = req.body.answer2;
  let answer3 = req.body.answer3;
  let answer4 = req.body.answer4;
  let answer5 = req.body.answer5;
  let questions = await data.quiz.getQuestions();
  if (answer1) {
    try {
      let checkedAnswer = await data.quiz.checkAnswer("1", answer1);
      return res.render("quiz", {
        title: "Quiz",
        question1: questions[0],
        question2: questions[1],
        question3: questions[2],
        question4: questions[3],
        question5: questions[4],
        explanation1: checkedAnswer[0],
        correct: checkedAnswer[1],
      });
    } catch (e) {
      return res.status(404).render("home");
    }
  }

  if (answer2) {
    try {
      let checkedAnswer = await data.quiz.checkAnswer("2", answer2);
      return res.render("quiz", {
        title: "Quiz",
        question1: questions[0],
        question2: questions[1],
        question3: questions[2],
        question4: questions[3],
        question5: questions[4],
        explanation2: checkedAnswer[0],
        correct: checkedAnswer[1],
      });
    } catch (e) {
      return res.status(404).render("home");
    }
  }


  if (answer3) {
    try {
      let checkedAnswer = await data.quiz.checkAnswer("3", answer3);
      return res.render("quiz", {
        title: "Quiz",
        question1: questions[0],
        question2: questions[1],
        question3: questions[2],
        question4: questions[3],
        question5: questions[4],
        explanation3: checkedAnswer[0],
        correct: checkedAnswer[1],
      });
    } catch (e) {
      return res.status(404).render("home");
    }
  }


  if (answer4) {
    try {
      let checkedAnswer = await data.quiz.checkAnswer("4", answer4);
      return res.render("quiz", {
        title: "Quiz",
        question1: questions[0],
        question2: questions[1],
        question3: questions[2],
        question4: questions[3],
        question5: questions[4],
        explanation4: checkedAnswer[0],
        correct: checkedAnswer[1],
      });
    } catch (e) {
      return res.status(404).render("home");
    }
  }

  if (answer5) {
    try {
      let checkedAnswer = await data.quiz.checkAnswer("5", answer5);
      return res.render("quiz", {
        title: "Quiz",
        question1: questions[0],
        question2: questions[1],
        question3: questions[2],
        question4: questions[3],
        question5: questions[4],
        explanation5: checkedAnswer[0],
        correct: checkedAnswer[1],
      });
    } catch (e) {
      return res.status(404).render("home");
    }
  }

  return res.status(400).render("quiz", {title: "Quiz",
  question1: questions[0],
  question2: questions[1],
  question3: questions[2],
  question4: questions[3],
  question5: questions[4],})
});

module.exports = router;
