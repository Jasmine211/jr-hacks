const mongoCollections = require("../config/mongoCollections");
const quiz = mongoCollections.quiz;
const { ObjectId } = require("mongodb");
const helper = require("../helpers");
var questionNumber = 1;
const getQuestionById = async (id) => {
  id = helper.checkId(id);
  const quizCollection = await quiz();
  const question = await quizCollection.findOne({ _id: new ObjectId(id) });
  if (question === null) throw "Error: no question found with that id";
  return question;
};
const addQuestion = async (question, choices, answer, explanation) => {
  const quizCollection = await quiz();
  let newQuestion = {
    number: `${questionNumber++}`,
    question: question,
    choices: choices,
    answer: answer,
    explanation: explanation
  };
  const insertInfo = await quizCollection.insertOne(newQuestion);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw "Error: could not add question";
  const newId = insertInfo.insertedId.toString();
  const addedQuestion = await getQuestionById(newId);
  return addedQuestion;
};
const getQuestions = async () => {
  const quizCollection = await quiz();
  const quizList = await quizCollection.find({}).toArray();
  if (!quizList) throw "Error: could not get all questions";
  return quizList;
};

const checkAnswer = async (questionNum, answerChoice) => {
    const quizCollection = await quiz();
    const question = await quizCollection
    .find({ "number": questionNum })
    .toArray();
  
  if (!question) {
    throw `no question found with given answer choice`;
  }
  const explanation = question[0].explanation
  let response = [explanation];
    if(question[0].answer!==answerChoice){
        response.push(0)
        return response
    }
    response.push(1)
    return response;
};

module.exports = {
  addQuestion,
  getQuestionById,
  getQuestions,
  checkAnswer
};
