<?php

$msg = 'Message de ' . $_POST['email'] . ' rencontrant le problème suivant lors du postage d\'annonce:' . PHP_EOL . $_POST['subject']; 
$url = 'http://51.79.255.217:8080/chat/send';
$data = array('message' => $msg, 'phone' => '+33623671013');

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data)
    )
);
$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) { /* Handle error */
    echo "Bon ben vraiment pas de chance, non seulement vous avez un problème pour poster votre annonce, mais aussi pour contacter le support.";
}

echo "Votre message a bien été envoyé." .PHP_EOL . "Nous faisons notre possible pour vous répondre dans les prochaines 48 heures.";
