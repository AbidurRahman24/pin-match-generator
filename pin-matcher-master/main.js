const generatePin = () => {
  let randomNumer = Math.random() * 10000;
  let pin = (randomNumer + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    return generatePin();
  }
};
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  const generateDisplay = document.getElementById("generateDisplay");
  generateDisplay.value = generatePin();
});
// calcultor

const buttonContainer = document.getElementById("button-container")
buttonContainer.addEventListener('click', (e)=>{
    const number = e.target.innerText
    if(isNaN(number)){
        //backspech
        // clear
        if (number === 'C') {
            const calcDisplay = document.getElementById("calc-display")
            calcDisplay.value = ''
        }
    }
    else{
        const calcDisplay = document.getElementById("calc-display")
        calcDisplay.value = calcDisplay.value + number
    }
})

const submitPin = document.getElementById("calc-submit")
submitPin.addEventListener('click', ()=>{
    const generateDisplay = document.getElementById("generateDisplay").value;
    const calcDisplay = document.getElementById("calc-display").value
    if (generateDisplay === calcDisplay) {
        const curect = document.getElementById("corrent")
        curect.style.display = 'block';
        const incurect = document.getElementById("incorrent")
        incurect.style.display = 'none'
    }
    else{
        const incurect = document.getElementById("incorrent")
        incurect.style.display = 'block';
        const curect = document.getElementById("corrent")
        curect.style.display = 'none';
    }
})
