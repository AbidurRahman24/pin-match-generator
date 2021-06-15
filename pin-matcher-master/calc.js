const getPin = () => {
  const randomPin = Math.random() * 10000;
  const pin = (randomPin + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
};

const pinGenerator = document.getElementById("generate-btn");
pinGenerator.addEventListener("click", () => {
  const generateDisplay = document.getElementById("generateDisplay");
  generateDisplay.value = getPin();
});

// Calculation Match
const calcBtn = document.getElementById("button-container")
calcBtn.addEventListener('click', (e)=>{
    const number = e.target.innerText;
    if (isNaN(number)) {
        //backspace
        // clear 
        if (number === 'C') {
            const clear = document.getElementById("calc-display")
            clear.value = ''
        }
    }
    else{
        const calcDisplay = document.getElementById("calc-display");
        calcDisplay.value = calcDisplay.value + number
    }
    // PinMatch
    const generatePin = document.getElementById("generateDisplay").value;
    const calcDisplay = document.getElementById("calc-display").value;
    if (generatePin === calcDisplay) {
        const corect = document.getElementById("corrent");
        corect.style.display = 'block';
        const incorrent = document.getElementById("incorrent");
        incorrent.style.display = 'none'
    }
    else{
        const incorrent = document.getElementById("incorrent");
        incorrent.style.display = 'block'
        const corrent = document.getElementById("corrent");
        corrent.style.display = 'none'
    }
})
