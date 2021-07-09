<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection

$conn = mysqli_connect($servername, $username, $password);

// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_error());
} 
echo '<script>alert("Registered Successfully!!")</script>';

mysqli_select_db($conn,"task")or die(mysqli_error());

//Insert operation

$sql="insert into register (fname,lname,email,password,cp) VALUES ('$_POST[fname]','$_POST[lname]','$_POST[email]','$_POST[password]','$_POST[cp]')";
mysqli_query($conn,$sql)or die(mysqli_error($conn));

?>
