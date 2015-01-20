<?php
	$county = (int)$_POST['county'];
	$state = (int)$_POST['state'];
	
	 $data = file_get_contents('../data/div2013.json');
	 $data = json_decode($data);
	 echo json_encode($data);
?>