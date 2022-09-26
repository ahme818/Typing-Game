const wordText = document.querySelector(".word"),
    score = document.querySelector(".score span"),
    f_score = document.querySelector(".f-score span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    end = document.querySelector(".end"),
    end_cont = document.getElementById("cont"),
    main_cont = document.getElementById("main-cont"),
    fir_cont = document.getElementById("fir-cont"),
    play_again = document.getElementById("play-again"),
    medium = document.getElementById("medium");

    let words = [ 
        {
            word: "ahmed",
        },
        {
            word: "salah",
        },
        {
            word: "yousef",
        },
        {
            word: "nasr",
        },
        {
            word: "eslam",
        },
        {
            word: "nada",
        },
        {
            word: "hagag",
        },
        {
            word: "moomen",
        },
        {
            word: "saad",
        },
        {
            word: "ziad",
        },
        {
            word: "deep",
        },
        {
            word: "yasser",
        },
        {
            word: "mostafa",
        },
        {
            word: "field",
        },
        {
            word: "friend",
        },
        {
            word: "pocket",
        },
        {
            word: "needle",
        },
        {
            word: "expert",
        },
        {
            word: "statement",
        },
        {
            word: "second",
        },
        {
            word: "library",
        },
    ]

let total = 0,
    n = 0,
    sco = 1,
    i = 0,
    isPaused = false;
let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (!isPaused && maxTime > 1) {
            maxTime--;
            n--;
            return timeText.innerText = maxTime;
        } else if (maxTime == 1 && n == 1) {
            end_cont.classList.remove('hide');
            main_cont.classList.add('hide'),
                f_score.innerText = total,
                n = 0;
            total = 0;
        }
    }, 1000);
}

const initGame = () => {
    initTimer(n);
    // let randomObj = words[Math.floor(Math.random() * words.length)];
    let randomObj = words[i];
    let wordArray = randomObj.word.split("");
    wordText.innerText = wordArray.join("");
    score.innerText = total;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}


const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (userWord == correctWord) {
        total = total + sco,
        i++;
        initGame();
    }
}

const playAgain = () => {
    fir_cont.classList.remove('hide'),
        end_cont.classList.add('hide');
        isPaused = true;
}

const playMedium = () => {
    fir_cont.classList.add('hide'),
        main_cont.classList.remove('hide'),
        n = 30,
        total = 0,
        isPaused = false,
        i = 0,
        initGame();
}

end.addEventListener('click', function () {
    end_cont.classList.remove('hide'),
    main_cont.classList.add('hide'),
        f_score.innerText = total;
})

inputField.addEventListener("input", checkWord);
play_again.addEventListener("click", playAgain);
medium.addEventListener("click", playMedium);
