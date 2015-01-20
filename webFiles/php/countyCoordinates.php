<?php
	$county = $_POST['county'];
	$state = $_POST['state'];
	foreach(glob("$Curl/*") as $file) {
    	echo nl2br(file_get_contents($file));
	}
?>