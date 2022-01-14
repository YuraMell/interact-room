<?php

  function console_log($data){ 
    if(is_array($data) || is_object($data)){
		echo("<script>console.log('php_array: ".json_encode($data)."');</script>");
	} else {
		echo("<script>console.log('php_string: ".$data."');</script>");
	}
}

$category_json = $_GET["category"];

$walpappers = '' ? 'wallpappers' : $category_json;

console_log($walpappers);

?>