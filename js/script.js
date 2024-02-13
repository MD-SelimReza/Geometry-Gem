function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputValueText = input.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setDisplayValueById(areaDisplay, area) {
    const displayArea = document.getElementById(areaDisplay);
    displayArea.innerText = area;
}

let countdown = 1;

function storeCalculationArea(areaName, areaOutput) {
    const calculationArea = document.getElementById('calculation-area');

    const h5 = document.createElement('h5');
    h5.innerText = `${areaName} Area Output:`;
    h5.style.textAlign = 'center';
    h5.style.marginTop = '5px';
    h5.style.marginBottom = '5px';

    calculationArea.appendChild(h5);

    const p = document.createElement('p');
    p.innerHTML = `${countdown++}. ${areaOutput} cm<sup>2</sup>`;

    calculationArea.appendChild(p);
}

function calculateTriangleArea() {
    const base = getInputValueById('triangle-base');
    const hieght = getInputValueById('triangle-hieght');

    const triangleArea = 0.5 * base * hieght;

    setDisplayValueById('triangle-display-area', triangleArea);

    storeCalculationArea('Triangle', triangleArea);

    // const calculationArea = document.getElementById('calculation-area');
    // const p = document.createElement('p');
    // p.innerHTML = `${countdown++}. ${triangleArea} cm<sup>2</sup>`;

    // calculationArea.appendChild(p);
}


function calculateRectangleArea() {
    const width = getInputValueById('rectangle-width');
    const length = getInputValueById('rectangle-length');

    const rectangleArea = width * length;

    setDisplayValueById('rectangle-display-area', rectangleArea);

    storeCalculationArea('Rectangle', rectangleArea);
}

function calculateParallelogramArea() {
    const baseValue = getInputValueById('parallelogram-base');
    const hieghtValue = getInputValueById('parallelogram-hieght');

    const parallelogramArea = baseValue * hieghtValue;

    setDisplayValueById('parallelogram-display-area', parallelogramArea);

    storeCalculationArea('Parallelogram', parallelogramArea);
}

function calculatePentagonArea() {
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');

    const pentagonArea = 0.5 * perimeter * apothem;

    setDisplayValueById('pentagon-display-area', pentagonArea);

    storeCalculationArea('Pentagon', pentagonArea);
}

function calculateRhombusArea() {
    const diameterOne = getInputValueById('rhombus-diameter-one');
    const diameterTwo = getInputValueById('rhombus-diameter-two');

    const rhombusArea = 0.5 * diameterOne * diameterTwo;

    setDisplayValueById('rhombus-display-area', rhombusArea);

    storeCalculationArea('Rhombus', rhombusArea);
}

function calculateEllipseArea() {
    const majorRadius = getInputValueById('major-radius');
    const mainorRadius = getInputValueById('mainor-radius');

    const ellipseArea = (Math.PI * majorRadius * mainorRadius).toFixed(3);

    setDisplayValueById('ellipse-display-area', ellipseArea);

    storeCalculationArea('Ellipse', ellipseArea);
}

const cards = document.getElementsByClassName('card');

for (let card of cards) {

    card.addEventListener('mouseover', function () {
        const red = Math.floor(Math.random() * 255) + 1;
        const green = Math.floor(Math.random() * 255) + 1;
        const blue = Math.floor(Math.random() * 255) + 1;

        card.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    })
}


