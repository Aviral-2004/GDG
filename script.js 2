// Video Section
function loadVideo(videoId) {
  const iframe = document.querySelector('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
}

const videos = [
  { title: 'Soil Preparation Basics', id: 'dQw4w9WgXcQ' },
  { title: 'Organic Farming Techniques', id: 'eYq7WapuDLU' },
  { title: 'Sewing for Beginners', id: '5qap5aO4i9A' },
  { title: 'Crop Management Tips', id: 'XxVg_s8xAms' },
  { title: 'Smart Irrigation Methods', id: 'wJnBTPUQS5A' },
  { title: 'Pest Control Solutions', id: 'E07s5ZYygMg' },
  { title: 'Fertilizer Usage Guide', id: 'xvFZjo5PgG0' },
  { title: 'Kitchen Gardening Tips', id: 'tgbNymZ7vqY' },
  { title: 'How to Cook Healthy Meals', id: 'rYEDA3JcQqw' },
  { title: 'Sustainable Farming Ideas', id: '1V_xRb0x9aw' }
];

function displayVideos() {
  const videoList = document.getElementById('video-list');
  videos.forEach(video => {
    const button = document.createElement('button');
    button.textContent = video.title;
    button.onclick = () => loadVideo(video.id);
    videoList.appendChild(button);
  });
}
displayVideos();

// Define the questions and answers
const quizQuestions = [
  {
    question: "What is the primary source of nitrogen for plants?",
    answers: ["Water", "Soil", "Air", "Sunlight"],
    correct: 2
  },
  {
    question: "Which of these is an organic fertilizer?",
    answers: ["Chemical Fertilizer", "Manure", "Pesticides", "Insecticides"],
    correct: 1
  },
  {
    question: "What is the best time to irrigate crops?",
    answers: ["Midday", "Morning", "Night", "Afternoon"],
    correct: 1
  },
  {
    question: "Which of these is a pest for crops?",
    answers: ["Worms", "Bees", "Butterflies", "Grasshoppers"],
    correct: 0
  },
  {
    question: "What do plants need to perform photosynthesis?",
    answers: ["Water, Sunlight, and Carbon Dioxide", "Water and Oxygen", "Soil and Sunlight", "Air and Water"],
    correct: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Start the quiz and display the first question
function startQuiz() {
  document.getElementById("quiz-container").style.display = "block";
  document.querySelector("button").style.display = "none"; // Hide start button after quiz starts
  displayQuestion();
}

// Display the current question and answers
function displayQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = ''; // Clear previous answers

  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.style.display = 'block'; // Ensures each option is on a new line
    button.style.margin = '10px 0'; // Adds spacing between options
    button.style.padding = '10px'; // Adds padding for better readability
    button.onclick = () => checkAnswer(index);
    answersDiv.appendChild(button);
  });
}

// Check the answer and move to the next question
function checkAnswer(selectedAnswerIndex) {
  const correctAnswerIndex = quizQuestions[currentQuestionIndex].correct;
  if (selectedAnswerIndex === correctAnswerIndex) {
    score++;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

// Show the results after quiz is complete
function showResults() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("quiz-results").style.display = "block";
  document.getElementById("score").textContent = `You scored ${score} out of ${quizQuestions.length}`;
}

// Chatbot Section with Enhanced UI and Animation
function toggleChatbot() {
  const chatbot = document.getElementById('chatbot-container');
  chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'block' : 'none';
  if (chatbot.style.display === 'block') {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '<h3>How may I assist you today? 🤖</h3>';
    resetChatbotTimer();
  }
}

function closeChatbot() {
  document.getElementById('chatbot-container').style.display = 'none';
}

let chatbotTimeout;
function resetChatbotTimer() {
  clearTimeout(chatbotTimeout);
  chatbotTimeout = setTimeout(() => {
    document.getElementById('chatbot-container').style.display = 'none';
  }, 60000); // Auto-close after 60 seconds of inactivity
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  const chatMessages = document.getElementById('chatMessages');
  if (!message) return;

  const userMessage = document.createElement('p');
  userMessage.innerHTML = `You: ${message}`;
  chatMessages.appendChild(userMessage);

  // Add a simulated response from the chatbot
  const botMessage = document.createElement('p');
  botMessage.innerHTML = `Bot: You said "${message}". How can I help further?`;
  chatMessages.appendChild(botMessage);

  // Clear the input field
  input.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Voice Command Implementation
const voiceButton = document.getElementById('voiceButton');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

voiceButton.addEventListener('click', () => {
  recognition.start();
  voiceButton.disabled = true;
  voiceButton.innerHTML = 'Listening... 🎤';
});

recognition.onresult = (event) => {
  const speechToText = event.results[event.resultIndex][0].transcript;
  document.getElementById('chatInput').value = speechToText;
  voiceButton.innerHTML = '🎙️'; // Reset button text
  voiceButton.disabled = false;
  sendMessage();
};

recognition.onspeechend = () => {
  recognition.stop();
  voiceButton.disabled = false;
  voiceButton.innerHTML = '🎙️';
};

recognition.onerror = (event) => {
  console.log('Error occurred in recognition: ' + event.error);
  voiceButton.disabled = false;
  voiceButton.innerHTML = '🎙️'; // Reset button text
};
