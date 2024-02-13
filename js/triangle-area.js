function calculateTriangleArea() {
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText);

    const triangleHieght = document.getElementById('triangle-hieght');
    const triangleHieghtText = triangleHieght.value;
    const hieght = parseFloat(triangleHieghtText);

    const triangleDisplayArea = document.getElementById('triangle-display-area');
    const triangleArea = 0.5 * base * hieght;
    triangleDisplayArea.innerText = triangleArea;
}

function calculateRectangleArea() {
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValueText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValueText);

    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValueText = rectangleLength.value;
    const length = parseFloat(rectangleLengthValueText);

    const rectangleDisplayArea = document.getElementById('rectangle-display-area');
    const rectangleArea = width * length;
    rectangleDisplayArea.innerText = rectangleArea;
}


function calculateParallelogramArea() {
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseValueText = parallelogramBase.value;
    const baseValue = parseFloat(parallelogramBaseValueText);

    const parallelogramHieght = document.getElementById('parallelogram-hieght');
    const parallelogramHieghtValueText = parallelogramHieght.value;
    const hieghtValue = parseFloat(parallelogramHieghtValueText);

    const parallelogramDisplayArea = document.getElementById('parallelogram-display-area');
    const parallelogramArea = baseValue * hieghtValue;
    parallelogramDisplayArea.innerText = parallelogramArea;
}
