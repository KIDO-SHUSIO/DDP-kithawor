const balloon = document.getElementById('balloon');
let currentSize = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0; // เริ่มต้นที่ 0 (สีแดง)

balloon.addEventListener('click', () => {
    currentSize += 10;
    
    if (currentSize > 420) {
        currentSize = 200;
    }

    colorIndex = (colorIndex + 1) % 3;
    
    updateBalloon();
});

balloon.addEventListener('mouseleave', () => {
    currentSize -= 5;
    
    if (currentSize < 200) {
        currentSize = 200;
    }

    colorIndex = (colorIndex - 1 + 3) % 3;
    
    updateBalloon();
});

function updateBalloon() {
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}