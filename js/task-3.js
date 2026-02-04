
function getElementWidth(content, padding, border) {

    const elementWidth = parseInt(content) + 2 * parseInt(padding) + 2 * parseInt(border);

    return(`Element width is equal to ${elementWidth} px.`)
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
