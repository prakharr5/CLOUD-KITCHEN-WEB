<?php
$servername = "localhost";
$username = "root@localhost";
$password = "prakhar@1234";
$dbname = "cloudkitchen";


$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["uname"]) && isset($_POST["psw"])) {
        // Process login form
        $username = $_POST["uname"];
        $password = $_POST["psw"];

        // Add code to validate and authenticate the user
        // (Note: Do not store passwords as plain text; use hashing)
    } elseif (isset($_POST["uname"]) && isset($_POST["new-password"])) {
        // Process signup form
        $newUsername = $_POST["uname"];
        $newPassword = $_POST["new-password"];

        // Add code to insert the new user into the database
        $sql = "INSERT INTO users (username, password) VALUES ('$newUsername', '$newPassword')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
            // Redirect to index.html or any other page
            header("Location: index.html");
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
