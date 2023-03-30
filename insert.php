<?php
$host     = "localhost";
$username = "root";
$password = "password";
$dbname   = "tests";

//Establish connection
$conn = mysqli_connect($host, $username, $password, $dbname);
if (mysqli_connect_errno()) {
    die("Failed to connect to MySQL: " . mysqli_connect_error());
}

//Get data
$wpm = mysqli_real_escape_string($conn, $_POST['wpm']);
$accuracy = mysqli_real_escape_string($conn, $_POST['accuracy']);
$time = mysqli_real_escape_string($conn, $_POST['time']);
$textType = ucfirst(mysqli_real_escape_string($conn, $_POST['textType']));
$limitType = ucfirst(mysqli_real_escape_string($conn, $_POST['limitType']));
$limitValue = mysqli_real_escape_string($conn, $_POST['limitValue']);
$date = date("Y/m/d");

$experienceGained = mysqli_real_escape_string($conn, $_POST['experienceGained']);

$sql = "SELECT experience FROM users";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$currentExperience =  strval(round($row['experience']));

echo $experienceGained;

$newExperience = $currentExperience + $experienceGained;


//Insert data 
$sql = "INSERT INTO tests (WPM, accuracy, timeTaken, textType, limitType, limitValue, dateTaken)
        VALUES ('$wpm', '$accuracy', '$time', '$textType', '$limitType', '$limitValue', '$date')";
if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . mysqli_error($conn);
}

$sql = "UPDATE users 
        SET experience = '$newExperience'";
if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully";
    echo $newExperience;
} else {
    echo "Error: " . mysqli_error($conn);
}


//Close connection
mysqli_close($conn);
?>



