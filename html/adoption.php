<?php
$user = "loubard";
$password = "password";
$database = "mainecoon";
$table = "donation";
$today = date('Y-m-d');

try {
    $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
    $query = "SELECT * FROM mainecoon.donation WHERE DATE(expiredate) > '$today'";
    $result = $db->query($query);
    $to_encode = array();
    while ($row = $result->fetch(PDO::FETCH_ASSOC)){
        $to_encode[] = $row;
    }
    echo json_encode($to_encode);
} catch (PDOException $e) {
    $pagecontents = file_get_contents("error.html");
    echo str_replace("tittle", $e->getMessage(), $pagecontents);
    die();
}
