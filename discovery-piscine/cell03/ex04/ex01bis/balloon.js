let currentSize = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0; // เริ่มต้นที่ 0 (สีแดง)

const $balloon = $('#balloon'); // ใช้ jQuery เลือก balloon

// จัดการเหตุการณ์เมื่อคลิกที่บอลลูน
$balloon.on('click', function() {
    currentSize += 10;
    
    // ถ้าขนาดใหญ่กว่า 420px ให้กลับไปเป็นขนาดเริ่มต้น
    if (currentSize > 420) {
        currentSize = 200;
    }

    // เปลี่ยนสีไปข้างหน้า (แดง -> เขียว -> น้ำเงิน)
    colorIndex = (colorIndex + 1) % 3;
    
    updateBalloon();
});

// จัดการเหตุการณ์เมื่อเมาส์เลื่อนออกจากบอลลูน
$balloon.on('mouseleave', function() {
    currentSize -= 5;
    
    // ขนาดต้องไม่ต่ำกว่า 200px
    if (currentSize < 200) {
        currentSize = 200;
    }

    // เปลี่ยนสีย้อนกลับ
    colorIndex = (colorIndex - 1 + 3) % 3;
    
    updateBalloon();
});

// ฟังก์ชันสำหรับอัปเดตสไตล์ของบอลลูนบนหน้าจอโดยใช้ jQuery
function updateBalloon() {
    $balloon.css({
        'width': currentSize + 'px',
        'height': currentSize + 'px',
        'background-color': colors[colorIndex]
    });
}