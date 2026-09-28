let petCount = 0;
const petBtn = document.getElementById('pet-btn');
const petCountSpan = document.getElementById('pet-count');
const petMessage = document.getElementById('pet-message');

petBtn.addEventListener('click', () => {
    petCount++;
    petCountSpan.textContent = petCount;

    if (petCount === 1) {
        petMessage.textContent = "Purr... Katten liker det! 🐱";
    } else if (petCount === 5) {
        petMessage.textContent = "Katten maler høyt nå! 😸";
    } else if (petCount === 10) {
        petMessage.textContent = "Du er nå kattens favorittmenneske! 😻";
    } else if (petCount === 20) {
        petMessage.textContent = "Katten har sovnet i fanget ditt... 💤";
    }
});

const quotes = [
    "«Tid tilbrakt med katter er aldri kastet bort.» – Sigmund Freud",
    "«Hunder har eiere, katter har personell.» – Ukjent",
    "«Det er umulig å holde på et tøft utseende når en katt leker med tåa di.» – Ukjent",
    "«Katter vet hvordan de skal skaffe seg mat uten arbeid, husrom uten trelling og kjærlighet uten straff.» – W.L. George",
    "«En katt vil bare være venner med deg hvis du gjør deg fortjent til det.» – Ukjent"
];

const freqInput = document.getElementById('freq-input');
const freqBtn = document.getElementById('freq-btn');
const freqResult = document.getElementById('freq-result');

freqBtn.addEventListener('click', checkHearing);

freqInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkHearing();
    }
});

function checkHearing() {
    const freq = Number(freqInput.value);

    if (!freqInput.value || freq < 0) {
        freqResult.textContent = "Vennligst skriv inn en gyldig frekvens!";
        freqResult.style.color = "var(--accent-pink)";
        return;
    }

if (freq >= 25 && freq <= 150) {
        freqResult.textContent = `Ja, katten kan høre ${freq} Hz! 🐱`;
        freqResult.style.color = "var(--primary)";
    } else if (freq < 25) {
        freqResult.textContent = `${freq} Hz er for lavt – katten vil ikke høre det. 🔊`;
        freqResult.style.color = "var(--text-muted)";
    } else {
        freqResult.textContent = `${freq} Hz er over 150 Hz! 🚀`;
        freqResult.style.color = "var(--accent-pink)";
    }
}

const quoteBtn = document.getElementById('quote-btn');
const quoteDisplay = document.getElementById('quote-display');

quoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});

const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = "☀️ Bytt til lys modus";
    } else {
        themeBtn.textContent = "🌙 Bytt til mørk modus";
    }
});