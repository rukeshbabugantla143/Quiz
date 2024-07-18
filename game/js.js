document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 1500);
});

function playClickSound() {
    document.getElementById('clickSound').play();
}

const questions = [
    // Level 1: HTML Basics
    [
        { question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Transfer Markup Language", "None of the above"], correct: 0 },
        { question: "Which tag is used for the largest heading in HTML?", answers: ["<h6>", "<heading>", "<h1>", "<head>"], correct: 2 },
        { question: "What is the correct HTML element for inserting a line break?", answers: ["<lb>", "<break>", "<newline>", "<br>"], correct: 3 },
        { question: "Which HTML attribute is used to define inline styles?", answers: ["class", "style", "font", "styles"], correct: 1 },
        { question: "What is the correct HTML for creating a hyperlink?", answers: ["<a url='http://www.example.com'>Example</a>", "<a href='http://www.example.com'>Example</a>", "<a>http://www.example.com</a>", "<hyperlink>http://www.example.com</hyperlink>"], correct: 1 },
        { question: "Which HTML element is used to specify a footer for a document or section?", answers: ["<bottom>", "<footer>", "<section>", "<end>"], correct: 1 },
        { question: "What is the correct HTML for inserting an image?", answers: ["<img href='image.gif' alt='MyImage'>", "<img src='image.gif' alt='MyImage'>", "<image src='image.gif' alt='MyImage'>", "<pic src='image.gif' alt='MyImage'>"], correct: 1 },
        { question: "Which HTML element is used to define important text?", answers: ["<strong>", "<b>", "<important>", "<i>"], correct: 0 },
        { question: "What is the correct HTML for creating a checkbox?", answers: ["<input type='check'>", "<check>", "<checkbox>", "<input type='checkbox'>"], correct: 3 },
        { question: "Which HTML element defines the title of a document?", answers: ["<meta>", "<head>", "<title>", "<header>"], correct: 2 }
    ],
    // Level 2: CSS Basics
    [
        { question: "What does CSS stand for?", answers: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], correct: 2 },
        { question: "Which property is used to change the background color?", answers: ["color", "bgcolor", "background-color", "background"], correct: 2 },
        { question: "How do you select an element with id 'demo'?", answers: ["#demo", ".demo", "*demo", "demo"], correct: 0 },
        { question: "How do you select elements with class name 'test'?", answers: ["#test", "*test", "test", ".test"], correct: 3 },
        { question: "What property is used to change the font of an element?", answers: ["font-style", "text-style", "font-family", "typeface"], correct: 2 },
        { question: "How do you make each word in a text start with a capital letter?", answers: ["text-transform: capitalize", "text-style: capitalize", "transform: capitalize", "font-transform: capitalize"], correct: 0 },
        { question: "Which property is used to change the left margin of an element?", answers: ["padding-left", "margin-left", "indent", "left-margin"], correct: 1 },
        { question: "How do you select all p elements inside a div element?", answers: ["div.p", "div p", "div + p", "div > p"], correct: 1 },
        { question: "Which property is used to change the text color of an element?", answers: ["text-color", "color", "font-color", "text-style"], correct: 1 },
        { question: "How do you display hyperlinks without an underline?", answers: ["a {text-decoration: none;}", "a {underline: none;}", "a {text-underline: none;}", "a {decoration: no-underline;}"], correct: 0 }
    ],
    // Level 3: JavaScript Basics
    [
        { question: "Inside which HTML element do we put the JavaScript?", answers: ["<javascript>", "<js>", "<scripting>", "<script>"], correct: 3 },
        { question: "What is the correct JavaScript syntax to change the content of the HTML element with id 'demo'?", answers: ["document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElement('demo').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!';", "document.getElementByName('demo').innerHTML = 'Hello World!';"], correct: 0 },
        { question: "How do you create a function in JavaScript?", answers: ["function myFunction()", "function:myFunction()", "function = myFunction()", "myFunction():"], correct: 0 },
        { question: "How do you call a function named 'myFunction'?", answers: ["call myFunction()", "myFunction()", "call function myFunction()", "Call.myFunction()"], correct: 1 },
        { question: "How to write an IF statement in JavaScript?", answers: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"], correct: 1 },
        { question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", answers: ["if (i != 5)", "if i <> 5", "if (i <> 5)", "if i =! 5 then"], correct: 0 },
        { question: "How does a WHILE loop start?", answers: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10; i++)"], correct: 0 },
        { question: "How does a FOR loop start?", answers: ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"], correct: 3 },
        { question: "How can you add a comment in JavaScript?", answers: ["<!--This is a comment-->", "//This is a comment", "'This is a comment", "* This is a comment *"], correct: 1 },
        { question: "What is the correct way to write a JavaScript array?", answers: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"], correct: 1 }
    ],
    // Level 4: Web Concepts
    [
        { question: "What does API stand for?", answers: ["Application Programming Interface", "Automated Program Integration", "Advanced Program Installation", "Application Process Integration"], correct: 0 },
        { question: "What is the purpose of HTTP?", answers: ["To style web pages", "To define the structure of web pages", "To transfer data over the internet", "To program web applications"], correct: 2 },
        { question: "What is a cookie in web development?", answers: ["A type of web server", "A small text file stored on the user's computer", "A programming language", "A type of web browser"], correct: 1 },
        { question: "What does URL stand for?", answers: ["Universal Resource Locator", "Uniform Resource Locator", "United Resource Locator", "Universal Reference Locator"], correct: 1 },
        { question: "What is responsive web design?", answers: ["Designing websites quickly", "Creating websites that respond to user input", "Designing websites that adapt to different screen sizes", "Designing websites with fast load times"], correct: 2 },
        { question: "What is AJAX?", answers: ["A programming language", "A database system", "A technique for creating interactive web applications", "A web server"], correct: 2 },
        { question: "What is the purpose of XML?", answers: ["To style web pages", "To store and transport data", "To create interactive web pages", "To define the structure of web pages"], correct: 1 },
        { question: "What is the difference between GET and POST methods?", answers: ["GET is faster, POST is slower", "GET is used for sending data, POST for receiving data", "GET sends data in the URL, POST sends data in the request body", "There is no difference"], correct: 2 },
        { question: "What is a CDN?", answers: ["Content Delivery Network", "Creative Design Network", "Cascading Data Network", "Computer Data Network"], correct: 0 },
        { question: "What is the purpose of a sitemap?", answers: ["To design the layout of a website", "To list the pages of a website", "To create a database for a website", "To style the pages of a website"], correct: 1 }
    ],
    // Level 5: Advanced Web Development
    [
        { question: "What is WebSocket?", answers: ["A type of electrical outlet", "A protocol for full-duplex communication", "A JavaScript library", "A CSS framework"], correct: 1 },
        { question: "What is the purpose of CORS?", answers: ["To style web pages", "To enable secure cross-origin requests", "To compress web files", "To optimize database queries"], correct: 1 },
        { question: "What is a Progressive Web App (PWA)?", answers: ["A web app that loads progressively", "A native mobile app", "A web app with native app-like features", "A desktop application"], correct: 2 },
        { question: "What is Redux used for?", answers: ["State management in JavaScript apps", "Creating responsive layouts", "Server-side rendering", "Database management"], correct: 0 },
        { question: "What is GraphQL?", answers: ["A graph drawing library", "A query language for APIs", "A new JavaScript framework", "A CSS preprocessor"], correct: 1 },
        { question: "What is webpack primarily used for?", answers: ["Testing JavaScript code", "Module bundling", "Creating APIs", "Managing databases"], correct: 1 },
        { question: "What is the purpose of service workers?", answers: ["To manage web services", "To improve offline functionality and performance", "To create web services", "To optimize server performance"], correct: 1 },
        { question: "What is the main benefit of server-side rendering?", answers: ["Improved security", "Better SEO and initial load performance", "Reduced server load", "Easier debugging"], correct: 1 },
        { question: "What is the purpose of a JWT (JSON Web Token)?", answers: ["To format JSON data", "To encrypt data", "To securely transmit information between parties", "To compress JSON data"], correct: 2 },
        { question: "What is the role of Babel in modern web development?", answers: ["To bundle JavaScript modules", "To transpile modern JavaScript to older versions", "To minify CSS", "To optimize images"], correct: 1 }
    ]
];

let currentLevel = 0;
let currentQuestion = 0;
let score = 0;
let incorrectQuestions = [];
let timer;
let timeLeft = 600; // 10 minutes
let playerId = null;

const startGameBtn = document.getElementById('start-game-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const resultsElement = document.getElementById('results');
const levelInfo = document.getElementById('level-info');
const progressBar = document.querySelector('.progress-bar');
const progressElement = document.getElementById('progress');
const currentLevelElement = document.getElementById('current-level');
const questionNumberElement = document.getElementById('question-number');
const timerElement = document.getElementById('timer');

startGameBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions[currentLevel].length) {
        showQuestion();
    } else {
        showResults();
    }
});

document.getElementById('player-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch('player.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        playerId = data.id;
        currentLevel = data.current_level - 1;
        document.getElementById('login-form').style.display = 'none';
        startGameBtn.style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});

function startGame() {
    startGameBtn.style.display = 'none';
    levelInfo.style.display = 'flex';
    progressBar.style.display = 'block';
    questionContainer.style.display = 'block';
    nextBtn.style.display = 'block';
    resultsElement.style.display = 'none';
    currentQuestion = 0;
    score = 0;
    incorrectQuestions = [];
    showQuestion();
    startTimer();
}

function showQuestion() {
    resetState();
    let question = questions[currentLevel][currentQuestion];
    questionElement.innerText = question.question;
    questionNumberElement.innerText = currentQuestion + 1;
    currentLevelElement.innerText = currentLevel + 1;

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(index));
        answersElement.appendChild(button);
    });

    updateProgressBar();
}

function resetState() {
    nextBtn.style.display = 'none';
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(index) {
    const buttons = answersElement.getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
    }

    if (index === questions[currentLevel][currentQuestion].correct) {
        buttons[index].classList.add('correct');
        score++;
    } else {
        buttons[index].classList.add('incorrect');
        buttons[questions[currentLevel][currentQuestion].correct].classList.add('correct');
        incorrectQuestions.push(questions[currentLevel][currentQuestion]);
    }

    nextBtn.style.display = 'block';
}

function showResults() {
    updatePlayerLevel();
    clearInterval(timer);
    questionContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    resultsElement.style.display = 'block';
    document.getElementById('correct-answers').innerText = score;
    document.getElementById('incorrect-answers').innerText = questions[currentLevel].length - score;
    document.getElementById('time-taken').innerText = formatTime(600 - timeLeft);

    const incorrectList = document.getElementById('incorrect-questions');
    incorrectList.innerHTML = '';
    incorrectQuestions.forEach(q => {
        const li = document.createElement('li');
        li.innerText = q.question;
        incorrectList.appendChild(li);
    });

    const nextLevelBtn = document.getElementById('next-level-btn');
    if (currentLevel < questions.length - 1) {
        nextLevelBtn.style.display = 'block';
        nextLevelBtn.addEventListener('click', startNextLevel);
    } else {
        nextLevelBtn.style.display = 'none';
        resultsElement.innerHTML += '<h2>Congratulations! You have completed all levels!</h2>';
        document.getElementById('certificate-btn').style.display = 'block';
        document.getElementById('certificate-btn').addEventListener('click', () => {
            window.location.href = `generate_certificate.php?id=${playerId}`;
        });
    }
}

function startNextLevel() {
    currentLevel++;
    startGame();
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions[currentLevel].length) * 100;
    progressElement.style.width = `${progress}%`;
}

function startTimer() {
    timeLeft = 600;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updatePlayerLevel() {
    fetch('update_level.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `id=${playerId}&level=${currentLevel + 1}`
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}