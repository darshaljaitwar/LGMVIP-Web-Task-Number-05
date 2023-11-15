document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit").addEventListener("click", function() {
        var name = document.getElementById("name").value;
        var rollNumber = document.getElementById("rollNumber").value;
        var marks = document.getElementById("marks").value;
        
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "result.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("resultMessage").textContent = xhr.responseText;
            }
        };
        xhr.send("name=" + name + "&rollNumber=" + rollNumber + "&marks=" + marks);
    });
});