<?php

if (isset($_POST['regno']) && isset($_POST['email']) && isset($_POST['pass']) && isset($_POST['c_pass'])){
    include 'db_conn.php';

    function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $regno = validate($_POST['regno']);
    $email = validate($_POST['email']);
    $pass = validate($_POST['pass']);
    $c_pass = validate($_POST['c_pass']);

    if (empty($regno) || empty($email) || empty($pass) || empty($c_pass)) {
        header("Location: index.php");
    }else {
        $sql = "INSERT INTO test(regno,email,pass,c_pass) VALUES('$regno','$email','$pass','$c_pass')";
        $res = mysqli_query($conn, $sql);

        if($res) {
            echo "<script>alert('Data inserted successfully'); window.location.href='index.php';</script>";
        } else {
            echo "<script>alert('Error: " . mysqli_error($conn) . "'); window.location.href='index.php';</script>";
        }
    }

}else {
    header("Location: index.php");
}



?>