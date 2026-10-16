document.getElementById('btn').addEventListener('click', function() {
    
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});