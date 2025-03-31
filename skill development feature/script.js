// Function to convert text to speech using Google Cloud API
function speakText() {
  let text =
    document.getElementById("title").innerText +
    " " +
    document.getElementById("subtitle").innerText;

  // Google Cloud Text-to-Speech API request
  fetch(
    "https://texttospeech.googleapis.com/v1/text:synthesize?key=" + API_KEY,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: { text: text },
        voice: { languageCode: "en-IN", ssmlGender: "FEMALE" }, // Change for regional languages
        audioConfig: { audioEncoding: "mp3" },
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const audioContent = data.audioContent;
      if (audioContent) {
        const audio = new Audio("data:audio/mp3;base64," + audioContent);
        audio.play();
      } else {
        console.error("Error: No audio content received.");
      }
    })
    .catch((error) => console.error("Error with Google TTS:", error));
}

// Speech-to-Text (Voice Input)
function startVoiceInput() {
  let recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.lang = document.getElementById("languageSelect").value;
  recognition.start();

  recognition.onresult = function (event) {
    let spokenText = event.results[0][0].transcript;
    document.getElementById("userQuery").innerText = "You said: " + spokenText;
  };

  recognition.onerror = function (event) {
    console.error("Speech recognition error:", event.error);
  };
}

// Language Translation
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    let lang = this.value;

    let translations = {
      English: {
        title: "Learn Skills, Earn Money!",
        subtitle: "Free training for farming, tailoring, and more. Join now!",
        agriTitle: "🚜 Agricultural Training",
        agriDesc: "Grow more crops with smart farming!",
        handiTitle: "🎨 Handicrafts Training",
        handiDesc: "Make and sell handmade products!",
        videoTitle: "📺 Video Tutorials",
        videoDesc: "Watch this to learn tailoring and farming techniques.",
        digitalTitle: "💻 Digital Skills Training",
        digitalDesc: "Learn basic computer skills and online freelancing.",
        financeTitle: "💰 Financial Literacy",
        financeDesc: "Learn budgeting, saving, and small business loans.",
        womenTitle: "👩‍🎓 Women Empowerment",
        womenDesc: "Learn tailoring, self-defense, and entrepreneurship.",
      },
      हिंदी: {
        title: "कौशल सीखें, पैसा कमाएँ!",
        subtitle: "खेती, सिलाई और अन्य के लिए मुफ्त प्रशिक्षण। अभी शामिल हों!",
        agriTitle: "🚜 कृषि प्रशिक्षण",
        agriDesc: "स्मार्ट खेती के साथ अधिक फसल उगाएं!",
        handiTitle: "🎨 हस्तशिल्प प्रशिक्षण",
        handiDesc: "हस्तनिर्मित उत्पाद बनाएं और बेचें!",
        videoTitle: "📺 वीडियो ट्यूटोरियल",
        videoDesc: "यह देखें ताकि सिलाई और खेती की तकनीक सीख सकें।",
        digitalTitle: "💻 डिजिटल कौशल प्रशिक्षण",
        digitalDesc: "बेसिक कंप्यूटर स्किल्स और ऑनलाइन फ्रीलांसिंग सीखें।",
        financeTitle: "💰 वित्तीय साक्षरता",
        financeDesc: "बजटिंग, बचत और छोटे व्यवसाय ऋण के बारे में जानें।",
        womenTitle: "👩‍🎓 महिला सशक्तिकरण",
        womenDesc: "सिलाई, आत्मरक्षा और उद्यमिता सीखें।",
      },
    };

    // Update all text
    document.getElementById("title").innerText = translations[lang]["title"];
    document.getElementById("subtitle").innerText =
      translations[lang]["subtitle"];
    document.getElementById("agriTitle").innerText =
      translations[lang]["agriTitle"];
    document.getElementById("agriDesc").innerText =
      translations[lang]["agriDesc"];
    document.getElementById("handiTitle").innerText =
      translations[lang]["handiTitle"];
    document.getElementById("handiDesc").innerText =
      translations[lang]["handiDesc"];
    document.getElementById("videoTitle").innerText =
      translations[lang]["videoTitle"];
    document.getElementById("videoDesc").innerText =
      translations[lang]["videoDesc"];
    document.getElementById("digitalTitle").innerText =
      translations[lang]["digitalTitle"];
    document.getElementById("digitalDesc").innerText =
      translations[lang]["digitalDesc"];
    document.getElementById("financeTitle").innerText =
      translations[lang]["financeTitle"];
    document.getElementById("financeDesc").innerText =
      translations[lang]["financeDesc"];
    document.getElementById("womenTitle").innerText =
      translations[lang]["womenTitle"];
    document.getElementById("womenDesc").innerText =
      translations[lang]["womenDesc"];
  });

// Search Functionality
function searchPrograms() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let items = document.getElementsByClassName("training-item");

  for (let i = 0; i < items.length; i++) {
    let title = items[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    if (title.includes(input)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}
