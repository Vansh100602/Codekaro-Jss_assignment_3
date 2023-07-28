//--------------------------------------------------------> Assginment -1 <---------------------------------------------------------

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
}

document.onclick = changeBackgroundColor;