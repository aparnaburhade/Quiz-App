// Sample quiz data with 10 Schitt's Creek trivia questions and associated images
const quizData = [
    {
        question: "What is the name of the Rose family's town?",
        options: ["Schitt's Creek", "Roseville", "Moira's Town", "Davidville"],
        correctAnswer: "Schitt's Creek",
        //image: "images/schitts-creek-town.jpg" // Replace with your image path
    },
    {
        question: "Who is David Rose's sister?",
        options: ["Alexis Rose", "Moira Rose", "Stevie Budd", "Twyla Sands"],
        correctAnswer: "Alexis Rose",
        //image: "images/david-alexis.jpg" // Replace with your image path
    },
    {
        question: "What is Moira Rose's favorite saying?",
        options: ["'Ew, David!'", "'Love that journey for me'", "'I'm not a housewife!'", "'I'm not a monster!'"],
        correctAnswer: "'Love that journey for me'",
        //image: "images/moira-saying.jpg" // Replace with your image path
    },
    {
        question: "What is the name of the motel the Roses buy?",
        options: ["The Rosebud Motel", "Schitt's Creek Inn", "The Sunset Motel", "The Rose Palace"],
        correctAnswer: "The Rosebud Motel",
        //image: "images/rosebud-motel.jpg" // Replace with your image path
    },
    {
        question: "What is David's business venture?",
        options: ["Rose Apothecary", "David's Boutique", "Schitt's Creek Designs", "The General Store"],
        correctAnswer: "Rose Apothecary",
        //image: "images/rose-apothecary.jpg" // Replace with your image path
    },
    {
        question: "Which character works at the motel with David?",
        options: ["Stevie Budd", "Twyla Sands", "Mutt Schitt", "Patrick Brewer"],
        correctAnswer: "Stevie Budd",
        //image: "images/stevie-budd.jpg" // Replace with your image path
    },
    {
        question: "What is the name of the Rose family's son?",
        options: ["David Rose", "Stevie Budd", "Patrick Brewer", "Ted Mullens"],
        correctAnswer: "David Rose",
        //image: "images/david-rose.jpg" // Replace with your image path
    },
    {
        question: "Who is Moira Rose married to?",
        options: ["Johnny Rose", "Roland Schitt", "Bob Currie", "Dustin Mackenzie"],
        correctAnswer: "Johnny Rose",
        //image: "images/johnny-moiras-married.jpg" // Replace with your image path
    },
    {
        question: "What type of music does David Rose enjoy?",
        options: ["Indie", "Jazz", "Country", "Classical"],
        correctAnswer: "Indie",
        //image: "images/david-indie-music.jpg" // Replace with your image path
    },
    {
        question: "Who is Alexis Rose dating at the beginning of the series?",
        options: ["Ted Mullens", "Mutt Schitt", "Patrick Brewer", "Johnny Rose"],
        correctAnswer: "Ted Mullens",
        //image: "images/alexis-ted.jpg" // Replace with your image path
    }
];

let currentQuestionIndex = 0;
let score = 0; // Initialize score
const questionEl = document.getElementById('question');
const answersListEl = document.getElementById('answers-list');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const questionImageEl = document.getElementById('question-image'); // Get the image element

// Load the question and options along with the image
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    //questionImageEl.src = currentQuestion.image; // Set the image source

    // Clear previous options
    answersListEl.innerHTML = '';

    // Add new options
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.classList.add('option');
        li.addEventListener('click', function() {
            selectAnswer(option);
        });
        answersListEl.appendChild(li);
    });

    // Hide the Next button initially
    nextBtn.style.display = 'none';
}

// Handle the selection of an answer
function selectAnswer(selectedOption) {
    const options = document.querySelectorAll('#answers-list li');

    // Disable all options and apply correct/wrong styling
    options.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';

        if (option.textContent === selectedOption) {
            option.classList.add('selected');
        }

        if (option.textContent === quizData[currentQuestionIndex].correctAnswer) {
            option.classList.add('correct');
        } else if (option.textContent === selectedOption) {
            option.classList.add('wrong');
        }
    });

    // Update score if the answer is correct
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
        score++;
    }

    // Show feedback after selection
    resultEl.textContent = selectedOption === quizData[currentQuestionIndex].correctAnswer
        ? "Correct! 😊"
        : "Wrong! 😞";

    // Show the Next button
    nextBtn.style.display = 'inline-block';
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;

    // If there are more questions, load the next one
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        resultEl.textContent = '';
    } else {
        // Display final score at the end of the quiz
        resultEl.textContent = `You have completed the quiz! 🎉 Your score is ${score} out of ${quizData.length}`;
        nextBtn.style.display = 'none';
    }
}

// Add event listener to the Next button
nextBtn.addEventListener('click', nextQuestion);

// Initial call to load the first question
loadQuestion();
