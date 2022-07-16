<?php
//Database login
$user = "loubard";
$password = "password";
$database = "mainecoon";
$table = "donation";
$servername = "localhost";

//sql value from form
$catname = str_replace(['"',"'"], "\'", $_POST['catname']);
$descri = str_replace(['"',"'"], "\'", $_POST['descri']);
$region = $_POST['region'];
$email = str_replace(['"',"'"], "\'", $_POST['email']);;
$phone = $_POST['phone'];
$date = date('Y-m-d H:i:s');
$date = date('Y-m-d H:i:s', strtotime($date . "+1 week"));

$sql = "INSERT INTO mainecoon.donation (catname, descri, region, img, phone, email, dateposted)
VALUES ('$catname', '$descri', '$region','$target_file','$phone','$email','$date')";

//form photo
$target_dir = "/uploads/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
$uploadOk = 1;
$error_txt = "Une erreur s'est produite";
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

$error_page = "./error.html";

$con=mysqli_connect($servername,$user,$password,$database);

if (mysqli_connect_errno()) {
  $pagecontents = file_get_contents($error_page);
  echo str_replace("tittle", mysqli_connect_error(), $pagecontents);
  exit();
}

// Perform a query, check for error
if (!mysqli_query($con,$sql)) {
  $pagecontents = file_get_contents($error_page);
  echo str_replace("tittle", mysqli_error($con), $pagecontents);
  exit();
}

mysqli_close($con);


// // Insert into mainecoon.donation
// try {
//   $query = "INSERT INTO mainecoon.donation (catname, descri, region, img, phone, email, dateposted)
//   VALUES ('$catname', '$descri', '$region','$target_file','$phone','$email','$date')";
//   $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
//   $db->query($query);
//   echo $query;

// } catch (PDOException $e) {
//   echo $e;
//   $pagecontents = file_get_contents($error_page);
//   echo str_replace("tittle", $e->getMessage(), $pagecontents);
//   die();
// }

//Upload the photo to /var/www/menkoun.fr/html/uploads/

// Check if photo has been uploaded
if (isset ( $_FILES ['photo'] )) {
  if (!$_FILES ["photo"] ["error"] == UPLOAD_ERR_OK) {
      include("success.html");
  }
} else {
  include("success.html");
}

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
else{
  include("success.html");
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
  $pagecontents = file_get_contents($error_page);
  // if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["photo"]["tmp_name"], $_SERVER["DOCUMENT_ROOT"] . $target_file)) {
    include("success.html");
  } else {
    $pagecontents = file_get_contents($error_page);
    echo str_replace("tittle", "Une erreur lors du téléchargement du fichier", $pagecontents);
  }
}
