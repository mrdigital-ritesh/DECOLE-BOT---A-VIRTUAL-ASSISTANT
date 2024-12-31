const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const bt = document.querySelector('.image');
const player = document.getElementById("player");




const audioSources = [
    "music/Baby Song.mp3",
    "music/Background Music.mp3",
    "music/Ed Sheeran   Shape of you.webm",
    "music/Imagine Dragons - Believer.mp3",
    "music/Imran Khan - Satisfya.webm",
    "music/despacito.mp3"
]

const jokes = [
    "jokes ka pitara/Joke 1.mp3",
    "jokes ka pitara/Joke 2.mp3",
    "jokes ka pitara/Joke 3.mp3",
    "jokes ka pitara/Joke 4.mp3",
    "jokes ka pitara/Joke 5.mp3",
]

const startSound = new Audio('start.MP3');
const stopSound = new Audio('stop.MP3');


function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {

    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning. Welcome to design ecole college");
    }

    else if(hr >= 12 && hr <= 17) {
        speak("Good Afternoon. Welcome to design ecole college");
    }

    else {
        speak("Good Evening. Welcome to design ecole college");
    }
}


window.addEventListener('load', () => {
    setTimeout(() => {
     wishMe();

      speak("Activating Decole BOT, MADE BY RITESH BAGDI");
      speak("Going online");
    }, 2500); 
  });

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}




btn.addEventListener('click', ()=>{
    startSound.play();
    recognition.start();
});
bt.addEventListener('click', ()=>{
    startSound.play();
    recognition.start();
});
recognition.onstart = () => {
    content.textContent = 'Listening...'; 
};
recognition.onend = () => {
    stopSound.play();
    content.textContent = speech.text; 
};

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello ,how can i help you.";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine, tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Decole bot";
        speech.text = finalText;
    }

    else if(message.includes('developers')|| message.includes('who Develop you')) {
        const finalText = "Ritesh Bagdi is my developer";
        speech.text = finalText;
    }


    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('which is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric",year: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else if(message.includes('play ')) {   
        window.open(`https://www.youtube.com/search?q=${message.replace("play", "")}`, "_blank");
        const finalText = "Playing " + message.replace("play", "");
        speech.text = finalText;
    }
    
    else if(message.includes('open college website') || message.includes('open website') || message.includes('college website')||message.includes('more about college')) {   
        window.open('https://www.dezyneecole.com/');
        const finalText = "here you can get more information";
        speech.text = finalText;
    }

     else if(message.includes('Tell about college') || message.includes('college')) {   
        const finalText = "Dezyne E'cole College is situated in Ajmer in Rajasthan state of India , Dezyne École College of Design, Computer and Management is among the list of top and best colleges in Ajmer offering Diploma and Undergraduate degree courses";
        speech.text = finalText;
    }

    else if(message.includes('when was this institution establish') || message.includes('established')) {   
        const finalText = "Dezyne E'cole College was established in , April 2008";
        speech.text = finalText;
    }

    else if(message.includes('courses available') || message.includes('available courses')) {   
        const finalText = "these are the courses, available in Dezyne E'cole College are BCA, BBA, Graphic, fashion And interior designs";
        speech.text = finalText;
    }

    else if(message.includes('Cameras in institution')) {   
        const finalText = "there are 72 cameras in Dezyne ecole college";
        speech.text = finalText;
    }

    else if(message.includes('classrooms in institution')) {   
        const finalText = "there are 25 classrooms in Dezyne ecole college";
        speech.text = finalText;
    }

    else if(message.includes('events in institution' || 'cultural events in college')) {   
        const finalText = "the events in Dezyne E'cole College are Identity , kallaidoscope , deepoatsav , Rakhimaking , kite flying , Dancing and Singing";
        speech.text = finalText;
    }

    else if(message.includes('who is reetesh ')||message.includes('ritesh')) {   
        const finalText = "Ritesh Bagdi is my developer, and he is a student of Dezyne ecole college ,he is in 2nd year, and persuing BCA ";
        speech.text = finalText;
    }

      else if (message.includes('song')||message.includes('music')) { 
        playRandomMusic();
        const finalText = "Playing song";
        speech.text = finalText;
      }
      
      else if (message.includes('stop now')|| message.includes('stop it')) { 
        stopMusic();
        const finalText = "Music stopped";
        speech.text = finalText;
    }

    else if (message.includes('tell me a joke')) { 
        playRandomjoke();
        const finalText = "Playing jokes";
        speech.text = finalText;
      }

      else if (message.includes('one more')) { 
        playRandomjoke();
        const finalText = "next joke";
        speech.text = finalText;
      }

      else if (message.includes('stop joking')) { 
        stopjoke();
        const finalText = "joke stopped,hope you enjoyed";
        speech.text = finalText;
    }

    else if (message.includes('who is principal') || message.includes('principal')) { 
        const finalText = "Mrs. VINEETA MATHUR is principal of Dezyne ecole college";
        speech.text = finalText;
    }

    else if (message.includes('who is director') || message.includes('Director')) { 
        const finalText = "Mr. Amit Mathur is the Director of Dezyne ecole college";
        speech.text = finalText;
    }

    else if (message.includes('will you be my friend')) { 
        const finalText = "of course, we are friends, i am always with you";
        speech.text = finalText;
    }

    else if (message.includes('temperature')) {
        getWeatherForAjmer();
    }

    else if (message.includes('ok Bye')) {
        const finalText = "OK bye! Ritesh..shutting down...";
        speech.text = finalText;
    }


    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information about this";
        speech.text = finalText;
    }


    
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

function playRandomMusic() {
    let audioSource = audioSources[Math.floor(Math.random() * audioSources.length)];
    player.src = audioSource;
    player.play();
}

function stopMusic() {
    player.pause(); // 
    player.currentTime = 2; 
}

function playRandomjoke() {
    let jokeSource = jokes[Math.floor(Math.random() * jokes.length)]; 
    player.src = jokeSource; 
    player.play();
}

function stopjoke() {
    player.pause();
    player.currentTime = 2;
}




const apiKey = '44393b2f3f55b75418f659b190671651';

function getWeatherForAjmer() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ajmer&appid=${apiKey}&units=metric`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.main && data.main.temp) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const finalText = `The current temperature in Ajmer is ${temperature}°C with ${description}.`;
                speak(finalText);
            } else {
                speak("Sorry, I couldn't fetch the weather data for Ajmer.");
            }
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            speak("Sorry, I couldn't fetch the weather data for Ajmer.");
        });
}
