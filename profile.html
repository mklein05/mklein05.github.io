<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href ="/styles.css">
    <script src ="/script.js"></script>
</head>
<body>
    <div id = "profile-title">Profile</div>
    <div id = "profile-container">

        
<?php
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "tests";

//Connect to database
$conn = mysqli_connect($servername, $username, $password, $dbname);

//Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//Retrieve data from SQL database

//Retrieve average WPM
$sql = "SELECT AVG(wpm) FROM tests";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$averageWPM =  strval(round($row['AVG(wpm)']));

//Retrieve average accuracy
$sql = "SELECT AVG(accuracy) FROM tests";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$averageAccuracy =  strval(round($row['AVG(accuracy)']));

//Retrieve best WPM
$sql = "SELECT MAX(wpm) FROM tests";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$bestWPM =  strval(round($row['MAX(wpm)']));

//Retrieve number of tests
$sql = "SELECT COUNT(wpm) FROM tests";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$totalTests =  strval(round($row['COUNT(wpm)']));

//Retrieve experience
$sql = "SELECT experience FROM users";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$experience =  strval($row['experience']);

//Calculate Level
$level = floor(pow($experience,(1/1.7)) * 0.07);
//Calculate next level
$nextLevel = $level + 1;
//Calculate experience needed for next level
$nextLevelExperience = round(pow($nextLevel/0.07,1.7)); 

//Display statistics
echo '<div id="level-stat" class="statistic"><center> Level: <span style="color: #1CC4A8">' . $level . 
'</span> </center><center><span style="font-size: 25px">(</span><span style="color: #BB2532; font-size: 25px">'
 . $experience. '</span><span style="font-size: 25px">/</span></span><span style="color: #1CC4A8; font-size: 25px">' 
 . $nextLevelExperience . '</span><span style="font-size: 25px">)</span> </center><br /> </div>';
echo '<br /><div id="average-wpm-stat" class="statistic"> Average WPM: ' . $averageWPM . '</div>';
echo '<div id = "best-wpm-stat" class = "statistic"> Best WPM: ' . $bestWPM . '</div>';
echo '<div id = "average-accuracy-stat" class = "statistic"> Average Accuracy: ' . $averageAccuracy . '</div>';
echo '<div id = "total-tests-stat" class = "statistic"> Tests Taken: ' . $totalTests . ' </div>';



//Retrieve everything for the table
$sql = "SELECT * FROM tests";
$result = mysqli_query($conn, $sql);

//Generates table
echo "<table>";
echo "<tr><th>WPM</th><th>Accuracy</th><th>Time Taken</th><th>Text Type</th><th>Limit Type</th><th>Limit Value</th><th>Date Taken</th></tr>";
while($row = mysqli_fetch_assoc($result)) {
    echo "<tr><td>".$row["WPM"]."</td><td>".$row["accuracy"]."</td><td>".$row["timeTaken"]."</td><td>".$row["textType"].
    "</td><td>".$row["limitType"]."</td><td>".$row["limitValue"]."</td><td>".$row["dateTaken"]."</td></tr>";
}
echo "</table>";

//Close connection
mysqli_close($conn);
?>

    </div>
    <button id = "test-page-button" onclick = "window.location.href='index.html'">Test Page</button>
</body>
</html>


