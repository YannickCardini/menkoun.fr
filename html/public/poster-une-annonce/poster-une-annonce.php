<?php
//Database login
$user = "loubard";
$password = "password";
$database = "mainecoon";
$table = "donation";

//sql value from form
$catname = $_POST['catname'];
$desci = $_POST['desci'];
$region = $_POST['region'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = date('Y-m-d H:i:s');

//form photo
$target_dir = "/var/www/mainecoon.click/uploads/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
$uploadOk = 1;
$error_txt = "Une erreur s'est produite";
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Insert into mainecoon.donation
try {
  $query = "INSERT INTO mainecoon.donation (catname, descri, region, img, phone, email, dateposted)
  VALUES ('$catname', '$descri', '$region','$target_file','$phone','$email','$date')";
  $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
  $db->query($query);
} catch (PDOException $e) {
  $pagecontents = file_get_contents("error.html");
  echo str_replace("tittle", $e->getMessage(), $pagecontents);
  die();
}

//Upload the photo to /var/www/mainecoon.click/uploads/

// Check if image file is a actual image or fake image
if (isset($_POST["submit"])) {
  $check = getimagesize($_FILES["photo"]["tmp_name"]);
  if ($check !== false) {
    $uploadOk = 1;
  } else {
    $error_txt = "Le fichier n'est pas une vrai image";
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  $error_txt = "Le fichier existe déjà";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["photo"]["size"] > 4000000) {
  $error_txt = "La limite de 4MB a été dépassée";
  $uploadOk = 0;
}

// Allow certain file formats
if (
  $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
  && $imageFileType != "gif"
) {
  $error_txt = "Le fichier n'est pas une image";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  $pagecontents = file_get_contents("error.html");
  echo str_replace("tittle", $error_txt, $pagecontents);
  // if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    include("success.html");
  } else {
    $pagecontents = file_get_contents("error.html");
    echo str_replace("tittle", "Une erreur lors du téléchargement du fichier", $pagecontents);
  }
}