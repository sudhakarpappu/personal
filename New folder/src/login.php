<?php
include 'db_conn.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    session_start();
    $_SESSION['email'] = $email;

    // Echo both email and password for JavaScript to retrieve
    echo json_encode(array('success' => true, 'email' => $email, 'password' => $password));
} else {
    echo json_encode(array('success' => false, 'message' => 'Invalid email or password'));
}

$conn->close();
?>
