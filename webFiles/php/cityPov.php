<?php
	$county = (int)$_POST['county'];
	$state = (int)$_POST['state'];

	$json2010 = array();
	$json2011 = array();
	$json2012 = array();
	$json2013 = array();

	 $data = file_get_contents('../data/pov2010.json');
	 $data = json_decode($data);
	 for($i=1;$i<count($data); $i++){
	 	if ($data[$i][2] == $state && $data[$i][3] == $county) {
	 		$json2010 = $data[$i];
	 		break;
	 	}

	 }
	 $data = file_get_contents('../data/pov2011.json');
	 $data = json_decode($data);
	 for($i=1;$i<count($data); $i++){
	 	if ($data[$i][2] == $state && $data[$i][3] == $county) {
	 		$json2011 = $data[$i];
	 		break;
	 	}

	 }
	 $data = file_get_contents('../data/pov2012.json');
	 $data = json_decode($data);
	 for($i=1;$i<count($data); $i++){
	 	if ($data[$i][2] == $state && $data[$i][3] == $county) {
	 		$json2012 = $data[$i];
	 		break;
	 	}

	 }
	 $data = file_get_contents('../data/pov2013.json');
	 $data = json_decode($data);
	 for($i=1;$i<count($data); $i++){
	 	if ($data[$i][2] == $state && $data[$i][3] == $county) {
	 		$json2013 = $data[$i];
	 		break;
	 	}

	 }	 

	 echo '[' . json_encode($json2010) . ',' . json_encode($json2011) . ',' . json_encode($json2012) . ',' . json_encode($json2013) . ']';
?>