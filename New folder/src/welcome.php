<?php
session_start();
if(isset($_SESSION['email'])) {
    echo "Welcome, " . $_SESSION['email'] . "!"; // Display the email
} else {
    header("Location: index.php"); // Redirect to login if not logged in
}
?>
