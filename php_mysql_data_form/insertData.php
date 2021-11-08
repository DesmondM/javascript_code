<?php
$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];
$services =$_POST['services'];

if(!empty($name)||!empty($subject)||!empty($email)||!empty($message)||!empty($services)){
    $host ="dedi643.flk1.host-h.net";
    $dbUsername ="eduvadvbda_3";
    $dbPassword = "t35MmiRinrwswBb7GL58";
    $dbName= "eduvadvbda_db3";
    //connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
    if(mysqli_connect_correct()){
        die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
    }else{
        $select = "SELECT email From Assessment Where email = ? Limit 1";
        $insert = "INSERT into Assessment(name, subject, email, services, message) values(?,?,?,?,?)";

        $stmt = $conn->prepare($select);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum==0){
            $stmt->close();
            $stmt = $conn->prepare($insert);
            $stmt->bind_param("ssssii", $name, $subject, $email, $message, $services);
            $stmt->execute();
            echo "New record inserted successfully";
            mail($email, $subject, "Data Inserted");
            
        }
    }
}else{
    echo "Enter All Fields"
}