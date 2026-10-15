$('#btn').on('click', function() {
    
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    
    // ใช้ jQuery เปลี่ยนสีพื้นหลังของ body
    $('body').css('background-color', "rgb(" + r + "," + g + "," + b + ")");
});