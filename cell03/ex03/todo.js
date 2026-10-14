document.addEventListener("DOMContentLoaded", () => {
    const ftList = document.getElementById("ft_list");
    const newBtn = document.getElementById("new-btn");

    // โหลดรายการ TO DO จาก Cookie ทันทีที่เปิดหน้าเว็บ
    loadTodos();

    // จัดการเหตุการณ์เมื่อคลิกปุ่ม New
    newBtn.addEventListener("click", () => {
        const todoText = prompt("Enter a new TO DO:");
        
        // ถ้าผู้ใช้กรอกข้อความและไม่เป็นค่าว่างเปล่า
        if (todoText && todoText.trim() !== "") {
            addTodo(todoText.trim());
            saveTodos(); // บันทึกการเปลี่ยนแปลงลง Cookie
        }
    });

    // ฟังก์ชันสร้างรายการ TO DO และนำไปไว้บนสุด
    function addTodo(text) {
        const todoDiv = document.createElement("div");
        todoDiv.textContent = text;
        
        // จัดการเหตุการณ์เมื่อคลิกที่รายการ TO DO เพื่อลบ
        todoDiv.addEventListener("click", () => {
            const confirmDelete = confirm("Do you want to remove that to-do item?");
            if (confirmDelete) {
                todoDiv.remove(); // ลบออกจาก DOM ถาวร
                saveTodos(); // บันทึกการเปลี่ยนแปลงลง Cookie ทันที
            }
        });

        // นำรายการใหม่ไปวางไว้บนสุดของคอนเทนเนอร์ ft_list
        ftList.prepend(todoDiv);
    }

    // ฟังก์ชันบันทึกรายการทั้งหมดลงใน Cookie
    function saveTodos() {
        const todos = [];
        const children = ftList.children;
        
        // ดึงข้อความจากทุก div ใน ft_list มาเก็บใน Array
        for (let i = 0; i < children.length; i++) {
            todos.push(encodeURIComponent(children[i].textContent));
        }
        
        // แปลง Array เป็น JSON String และบันทึกลง Cookie (เก็บไว้ 1 ปี)
        document.cookie = "todo_list=" + JSON.stringify(todos) + "; path=/; max-age=31536000";
    }

    // ฟังก์ชันโหลดรายการทั้งหมดจาก Cookie มาแสดง
    function loadTodos() {
        const cookies = document.cookie.split(';');
        let todoCookie = null;
        
        // ค้นหา Cookie ที่ชื่อว่า todo_list
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.startsWith("todo_list=")) {
                todoCookie = c.substring("todo_list=".length, c.length);
                break;
            }
        }

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