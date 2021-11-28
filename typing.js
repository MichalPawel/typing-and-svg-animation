const box = document.querySelector('.typing');
const text = [`Cześć! jak tam?`, `Jak masz na imie?`, 'Ja jestem robotem ^miło mi Cię poznać']
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 70 //time between new letters
let activeDOMElement = box;

const typing = (newTime) => {
  const letter = text[textIndex].substr(wordIndex, 1);
  if (newTime - oldTime > speed) {
    if (textIndex >= text.length) {
      return
    }
    if (wordIndex >= text[textIndex].length) {
      return setTimeout(() => {
        box.textContent = '';
        textIndex++;
        wordIndex = 0;
        requestAnimationFrame(typing)
      }, 2000)
    } else if (wordIndex === 0 || letter === '^') {
      const p = document.createElement('p');
      box.appendChild(p);
      activeDOMElement = p;
    }
    if (letter != '^') {// this char in text makes new p
      activeDOMElement.textContent += letter;
    }
    wordIndex++;
    oldTime = newTime;
  }
  requestAnimationFrame(typing)
}

typing();


