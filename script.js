const morseCodeDict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
    '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
    '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
};

const reverseMorseDict = {};
for (const key in morseCodeDict) {
    reverseMorseDict[morseCodeDict[key]] = key;
}

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const toMorseBtn = document.getElementById('toMorse');
const toTextBtn = document.getElementById('toText');
const translateBtn = document.getElementById('translateBtn');
const playBtn = document.getElementById('playBtn');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');
const morseSound = document.getElementById('morseSound');
const morseChart = document.getElementById('morseChart');

let translationMode = true;

function initMorseChart() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?\'!/()&:;=+-_"$@'.split('');
    morseChart.innerHTML = '';
    
    letters.forEach(char => {
        const item = document.createElement('div');
        item.className = 'morse-item';
        item.innerHTML = `
            <div class="morse-char">${char}</div>
            <div class="morse-code">${morseCodeDict[char] || ' '}</div>
        `;
        morseChart.appendChild(item);
    });
}

function textToMorse(text) {
    return text.toUpperCase().split('').map(char => {
        return morseCodeDict[char] || '';
    }).join(' ');
}

function morseToText(morse) {
    return morse.split(' ').map(code => {
        return reverseMorseDict[code] || '';
    }).join('');
}