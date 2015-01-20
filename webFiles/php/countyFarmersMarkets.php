<?php
	$state = (int)$_POST['state'];
	$county = (int)$_POST['county'];

	$filename = "../data/FarmersMarketsByCounty.txt";
	$rows = file($filename, FILE_IGNORE_NEW_LINES);
	echo '[';
	foreach($rows as $row){
		$array = explode(",", $row);
		echo json_encode($array) . ',';
	}
	echo ']';
?>