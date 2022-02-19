<?php
    $email = htmlspecialchars($_POST['email']);

    $fname = htmlspecialchars($_POST['firstname']);
    $lname = htmlspecialchars($_POST['surname']);
    $tlf = htmlspecialchars($_POST['tlf-number']);
    
    $dir = htmlspecialchars($_POST['dir']);
    $pay_method = htmlspecialchars($_POST['pay_method']);
    if($pay_method == "cash") {
        $pay_method = "Efectivo";
    } else if($pay_method == "card") {
        $pay_method = "Tarjeta"; 
    } else {
        $pay_method = "NULL";
    }
    $coments = htmlspecialchars($_POST['coments']);

    $msg = "Estimado/a Sr./Sra. " + $fname + " " + $lname + ",\n\n";
    $msg += "Gracias por su compra, su pedido se ha tramitado con éxito.\n";
    $msg += "Se enviará a la dirección " + $dir + " y el pago se hará con " + $pay_method;
    $mgs += "\nEn caso de alguna incidencia le contactaremos al tlf: " + $tlf;
    $mgs += "\nTambién podrá ponerse en contacto con nosotros a través de elrincondelotaku@gmail.com";

    $header = "From: elrincondelotaku@gmail.com"."\r\n"."Reply-To: elrincondelotaku@gmail.com"."\r\n"."X-Mailer: PHP/".phpversion();

    mail($email, "El Rincon del Otaku, Pedido", $msg, $header);
?>