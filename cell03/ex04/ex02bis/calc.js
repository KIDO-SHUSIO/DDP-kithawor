// ใช้ jQuery เลือกปุ่มและดักจับ event click
$('#submit-btn').on('click', function() {
    // ใช้ jQuery อ่านค่าจาก input และ select
    const leftInput = $('#left-member').val();
    const rightInput = $('#right-member').val();
    const operator = $('#operator').val();

    // ฟังก์ชันตรวจสอบว่าเป็นจำนวนเต็มบวก (>= 0) หรือไม่ โดยใช้ Regular Expression
    const isValidNumber = (str) => {
        return /^\d+$/.test(str);
    };

    // ตรวจสอบความถูกต้องของ Input
    if (!isValidNumber(leftInput) || !isValidNumber(rightInput)) {
        alert('Error :(');
        console.log('Error :(');
        return;
    }

    const leftNum = parseInt(leftInput, 10);
    const rightNum = parseInt(rightInput, 10);

    // ตรวจสอบการหารหรือมอดุโลด้วย 0
    if ((operator === '/' || operator === '%') && rightNum === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;

    switch (operator) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '%':
            result = leftNum % rightNum;
            break;
    }

    // แสดงผลลัพธ์ผ่าน alert และ log
    alert(result);
    console.log(result);
});

// แจ้งเตือนทุกๆ 30 วินาที 
setInterval(function() {
    alert('Please, use me...');
}, 30000);