<?php
$user = "loubard";
$password = "password";
$database = "mainecoon";
$table = "donation";

try {
  $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
  echo "<h2>TODO</h2><ol>";
  foreach($db->query("SELECT catname FROM $table") as $row) {
    echo "<li>" . $row['catname'] . "</li>";
  }
  echo "</ol>";
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>