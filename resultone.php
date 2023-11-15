<?php
require_once("dbconfig.php");

if (isset($_POST["name"]) && isset($_POST["rollNumber"]) && isset($_POST["marks"])) {
    $name = $_POST["name"];
    $rollNumber = $_POST["rollNumber"];
    $marks = $_POST["marks"];

    $sql = "INSERT INTO students (name, roll_number, marks) VALUES ('$name', '$rollNumber', $marks)";
    if (mysqli_query($conn, $sql)) {
        echo "Result added successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
} else {
    echo "Invalid request.";
}
?>