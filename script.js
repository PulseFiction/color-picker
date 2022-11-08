
(changeColour = () => {
    const button = document.querySelector('button');
    const color = document.querySelector('.color');
    const rgbColor = document.querySelector('.rgb-color')

    button.addEventListener('click', () => {
        
        const r = Math.trunc(Math.random() * 255);
        const g = Math.trunc(Math.random() * 255);
        const b = Math.trunc(Math.random() * 255);

        
        let hexRed = convertToHex(r);
        let hexGreen = convertToHex(g);
        let hexBlue = convertToHex(b);

        color.textContent = `#${hexRed}${hexGreen}${hexBlue}`;
        rgbColor.textContent = `rgb(${r},${g},${b})`;
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })
})();

function convertToHex(n) {
    const hex = ['0', '1', '2', '3', '4','5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    const first = Math.trunc(n / 16);
    const second = Math.trunc(n % 16);

    const firstHex = hex[first];
    const secondHex = hex[second];

    return `${firstHex}${secondHex}`
}
