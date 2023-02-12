const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const quiz = data.quiz;

const main = async () => {
  const db = await dbConnection.dbConnection();
  await db.dropDatabase();
  let question1;
  let question2;
  let question3;
  let question4;
  let question5;
  try {
    question1 = await quiz.addQuestion(
      "What is the recommended minimum payment to make on outstanding balances?",
      [
        "About 0.5% of your total balance",
        "The exact amount that is due",
        "About 2%-3% of your total balance",
      ],
      "answer3",
      "To pay off the debt more quickly and pay less in interest, it is recommended to pay more than what is due, which helps improve your credit score."
    );
    //onsole.log(question1);
  } catch (e) {
    console.log(e);
  }
  try {
    question2 = await quiz.addQuestion(
      "When should payments be made for outstanding balances?",
      [
        "Make payments by the time they are due",
        "It is best to not make any expenses in the first place",
        "2 weeks after they are due",
      ],
      "answer1",
      "Payments should be made if not earlier then by the time they are due. On-time payments make up 35% of your credit score so it is crucial to avoid making late payments to avoid damage to your credit score. Not making any purchases at all would not affect your credit score."
    );
    //console.log(question2);
  } catch (e) {
    console.log(e);
  }
  try {
    question3 = await quiz.addQuestion(
      "It is recommended to create budget plans on a:",
      [
        "Yearly basis ",
        "Quarterly or monthly basis ",
        "A semi-yearly basis",
      ],
      "answer2",
      "It is important to know how you will be spending your money and to make sure you avoid overspending but necessities are covered. It is also encouraged to include unexpected expenses in your budget."
    );
    //console.log(question2);
  } catch (e) {
    console.log(e);
  }
  try {
    question4 = await quiz.addQuestion(
      "What does a budget help you accomplish?",
      [
        "Helps estimate how much money you plan on putting towards your savings and expenses based on the income made and necessary expenses",
        "Provides an estimate for how much money you'll earn in a year",
        " Ensures the amount of money saved is equivalent to the amount of money spent",
      ],
      "answer1",
      "It is encouraged to have a budget to see what areas you've spent more money in and if it is truly necessary or if adjustments can be made to more effectively manage your money. It aims to avoid running out of money or spending from paycheck to paycheck."
    );
    //console.log(question2);
  } catch (e) {
    console.log(e);
  }
  try {
    question5 = await quiz.addQuestion(
      "What is the goal of building credit?",
      [
        "Having accountability for your expenses",
        "Maintaining a credit score of 600",
        "Sets to improve your credit score and have access to better loan and credit offers.",
      ],
      "answer3",
      "The higher your credit score is, the lower interest rates youll qualify for. This saves you significant amounts of money on loans, mortgages and credit card balances. It is ideal to have a credit score of 740 or higher to get more attractive interest rates, but a conventional loan can be acquired with a score of at least 620."
    );
    //console.log(question2);
  } catch (e) {
    console.log(e);
  }
  await dbConnection.closeConnection();
};
main();
