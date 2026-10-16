// ใช้ jQuery $(document).ready() แทน DOMContentLoaded
$(document).ready(function() {
    const $ftList = $('#ft_list');
    const $newBtn = $('#new-btn');

    // โหลดรายการ TO DO จาก Cookie ทันทีที่เปิดหน้าเว็บ
    loadTodos();

    // จัดการเหตุการณ์เมื่อคลิกปุ่ม New
    $newBtn.on('click', function() {
        const todoText = prompt("Enter a new TO DO:");
        
        // ถ้าผู้ใช้กรอกข้อความและไม่เป็นค่าว่างเปล่า
        if (todoText && $.trim(todoText) !== "") {
            addTodo($.trim(todoText));
            saveTodos(); // บันทึกการเปลี่ยนแปลงลง Cookie
        }
    });

    // ฟังก์ชันสร้างรายการ TO DO และนำไปไว้บนสุด
    function addTodo(text) {
        // สร้าง div ใหม่และกำหนดข้อความ
        const $todoDiv = $('<div></div>').text(text);
        
        // จัดการเหตุการณ์เมื่อคลิกที่รายการ TO DO เพื่อลบ
        $todoDiv.on('click', function() {
            const confirmDelete = confirm("Do you want to remove that to-do item?");
            if (confirmDelete) {
                $(this).remove(); // ลบออกจาก DOM ถาวร
                saveTodos(); // บันทึกการเปลี่ยนแปลงลง Cookie ทันที
            }
        });

        // นำรายการใหม่ไปวางไว้บนสุดของคอนเทนเนอร์ ft_list
        $ftList.prepend($todoDiv);
    }

    // ฟังก์ชันบันทึกรายการทั้งหมดลงใน Cookie
    function saveTodos() {
        const todos = [];
        
        // ใช้ jQuery .each() วนลูปอ่านข้อความจากลูกของ ft_list
        $ftList.children('div').each(function() {
            todos.push(encodeURIComponent($(this).text()));
        });
        
        // แปลง Array เป็น JSON String และบันทึกลง Cookie (เก็บไว้ 1 ปี)
        document.cookie = "todo_list=" + JSON.stringify(todos) + "; path=/; max-age=31536000";
    }

    // ฟังก์ชันโหลดรายการทั้งหมดจาก Cookie มาแสดง
    function loadTodos() {
        const cookies = document.cookie.split(';');
        let todoCookie = null;
        
        // ค้นหา Cookie ที่ชื่อว่า todo_list
        // ใช้ jQuery .each() สำหรับวนลูป Array
        $.each(cookies, function(index, c) {
            c = $.trim(c);
            if (c.indexOf("todo_list=") === 0) {
                todoCookie = c.substring("todo_list=".length, c.length);
                return false; // break ออกจาก .each()
            }
        });

        // หากมีข้อมูลอยู่ใน Cookie
        if (todoCookie) {
            try {
                const todos = JSON.parse(todoCookie);
                
                // เนื่องจาก addTodo ใช้ prepend (เพิ่มไว้บนสุด)
                // เพื่อให้ลำดับถูกต้องเหมือนเดิม จึงต้องวนลูปจากหลังมาหน้า
                for (let i = todos.length - 1; i >= 0; i--) {
                    addTodo(decodeURIComponent(todos[i]));
                }
            } catch (e) {
                console.error("Error parsing cookies", e);
            }
        }
    }
});