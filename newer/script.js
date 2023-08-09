const quizData = [
    {
        question: "1. Choose the correct HTML element to define important text?",
        a: "<b>",
        b: "<i>",
        c: "<important>",
        d: "<strong>",
        correct: "d",
    },
    {
        question: "2. Which of this group of Colors represent the HTML color pattern?",
        a: "RGB,HEX,HSL,RGBA",
        b: "GBR,XEH,HSL,RGBA",
        c: "RGB,HEX,HSL",
        d: "HSL,HEX,RGBA",
        correct: "a",
    },
    {
        question: "3. Which character is used to indicate an end tag?",
        a: "#",
        b: "*",
        c: " /",
        d: ">",
        correct: "c",
    },
    {
        question: "4. Which of these options defines HTML comment?",
        a: "<this is comment>",
        b: "/*this is comment*/",
        c: "<h1> this is comment</h1>",
        d: "All of the above.",
        correct: "b",
    },
    {
        question:"5. The HTML headings consist of how many headings?",
        a: "1-6",
        b: "1-8",
        c: "1-5",
        d: "1-4",
        correct: "c",
    },
    {
      question:"6. Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        a: "p {background-color : yellow;}",
        b: "p {background-color : #yellow;}",
        c: "all {background-color : yellow;}",
        d: "all p {background-color : #yellow;}",
        correct: "a",
    },
    {
      question:"7. What is the purpose of the CSS “float” property?",
        a: "It controls the opacity of an element",
        b: "It positions an element to the left or right of its container",
        c: "It adds a shadow effect to an element",
        d: "It changes the font style of an element",
        correct: "b",
    },
    {
      question:"8. Which outlines the complete methods of adding CSS to HTML?",
        a: "internal and external",
        b: "external",
        c: "online, internal and external" ,
        d: "inline, internal and external",
        correct: "d",
    },
    {
      question:"9. Which CSS property is used to create rounded corners for an element?",
        a: "border-radius",
        b: "border-round",
        c: "corner-radius" ,
        d: "rounded-border",
        correct: "a",
    },
    {
      question:"10. How can you group multiple CSS selectors to apply the same styles to all of them?",
      a: "Using the group selector (,)",
      b: "Using the grouping operator (&)",
      c: "Using the compound selector (+)" ,
      d: "Using the universal selector (*)",
      correct: "d",
    },
    {
      question:"11. What keyword is used to check whether a given property is valid or not?",
      a: "in",
      b: "is in",
      c: "exists" ,
      d: "lies",
      correct: "a",
    },
    {
      question:"12. How do you add a comment in JavaScript?",
      a: "{This is a comment }",
      b: "// This is a comment",
      c: "/* This is a comment */" ,
      d: "This is a comment",
      correct: "b",
    },
    {
      question:"13. What does the “typeof” operator return?",
      a: "The data type of a variable",
      b:  'The value of a variable',
      c: "The index of a variable",
      d: "The size of a variable",
      correct: "b",
    },
    {
      question:"14. Which function is used to output content to the browser console?",
      a: "console.log()",
      b:  "print()",
      c: "log()",
      d: "output()",
      correct: "a",
    },
    {
      question:"15. The 'function' and 'var' are known as",
      a: "Keywords",
      b:  "Data types",
      c: "Declaration statements",
      d: " Prototypes",
      correct: "c",
    }
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };

  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };

  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          ` 
      }
    }
  });
  loadQuiz();