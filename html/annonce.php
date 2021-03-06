<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Annonce</title>
    <meta name="description" content="Vous souhaitez adopter un chat maine coon contre de bon soin ?" />
    <meta http-equiv="content-type" content="text/html; charset=windows-1252" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/css/annonce.css" />
    <link rel="stylesheet" type=" text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
    <link rel="icon" type="image/x-icon" href="/img/miaouss.svg">
    <script type="text/javascript" src="/js/jquery.min.js"></script>
</head>

<body>


    <?php

    $user = "loubard";
    $password = "password";
    $database = "mainecoon";
    $table = "donation";
    $servername = "localhost";
    $id = $_GET['id'];
    $error_page = "error.html";
    $today = date('Y-m-d');


    if (!is_numeric($id)) {
        $pagecontents = file_get_contents($error_page);
        $pagecontents = str_replace("tittle", "Mauvais paramètre URL", $pagecontents);
        $pagecontents =  str_replace("publication", "recherche", $pagecontents);
        echo str_replace("publier", "rechercher", $pagecontents);
    }

    $query = "SELECT * FROM mainecoon.donation WHERE DATE(expiredate) > '$today'";
    if ($id == -1)
        $query = $query . " ORDER BY ID DESC LIMIT 1";
    else
        $query = $query . " AND id=" . $id;

        
    $con = mysqli_connect($servername, $user, $password, $database);


    if (mysqli_connect_errno()) {
        echo $query;
        $pagecontents = file_get_contents($error_page);
        $pagecontents = str_replace("tittle", mysqli_connect_error(), $pagecontents);
        $pagecontents =  str_replace("publication", "recherche", $pagecontents);
        echo str_replace("publier", "rechercher", $pagecontents);
        exit();
    }

    $res = mysqli_query($con, $query);
    // Perform a query, check for error
    if (!$res) {
        $pagecontents = file_get_contents($error_page);
        $pagecontents = str_replace("tittle", mysqli_error($con), $pagecontents);
        $pagecontents =  str_replace("publication", "recherche", $pagecontents);
        echo str_replace("publier", "rechercher", $pagecontents);
        exit();
    }
    $result = mysqli_fetch_assoc($res);

    if($result == NULL) {
        $pagecontents = file_get_contents($error_page);
        $pagecontents = str_replace("tittle", "Annonce expirée ou inexsistante", $pagecontents);
        $pagecontents =  str_replace("publication", "recherche", $pagecontents);
        echo str_replace("publier", "rechercher", $pagecontents);
        exit();
    }

    mysqli_close($con);

    function IsNullOrEmptyString($str)
    {
        return ($str === null || trim($str) === '');
    }

    if (IsNullOrEmptyString(($result['phone'])))
        $result['phone'] = 'Non renseigné';
    
    if (IsNullOrEmptyString(($result['img'])))
        $result['img'] = '/img/photo-non-disponible.jpg';

    ?>
    <div id="header"></div>
    <div id="site_content">
        <h1>Annonce#<?php echo $result['id'] ?></h1>

        <div id="sidebar_container"></div>
        <!--Main Content Start Here-->
        <div id="content">
            <div class="card">
                <img src=<?php echo $result['img']; ?> alt="Chat maine coon a donner" width="90%" class="avatar">
                <h2><?php echo $result['catname']; ?></h2>
                <div class="subcontainer">
                    <p class="subtitle">Contact</p>
                    <p class="contact"><img src="/img/email.png" alt="icon d'email" class="icon"><?php echo $result['email']; ?></p>
                    <p class="contact"><img src="/img/phone.png" alt="icon de téléphone" class="icon"><?php echo $result['phone']; ?></p>
                </div>

                <div class="subcontainer">
                    <p class="subtitle">Info</p>
                    <p>Ce magnifique maine coon se situe en <strong><?php echo $result['region']; ?></strong>.</p>
                    <p><?php echo $result['descri']; ?></p>
                </div>
                <br>
                <p class="expiredate">Cette annonce sera retirée le <?php echo $result['expiredate']; ?></p>
            </div>
            <?php


            ?>


        </div>
        <!--Main Content End Here-->
    </div>
    <div id="footer"></div>
    <script type="text/javascript" src="/js/header.js"></script>
    <script type="text/javascript" src="/js/menu.js"></script>
    <script type="text/javascript" src="/js/footer.js"></script>

</body>

</html>