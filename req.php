<?php
$apiKey = "6aee8af66cf310d1c78d8cf04df0cf54";
if(isset($_GET['page']) && isset($_GET['generId'])){
	$page = $_GET['page'];
	$generId = $_GET['generId'] ;
	$url = "https://api.themoviedb.org/3/discover/movie?api_key=$apiKey&page=$page&with_genres=$generId&er_page=10";
	$data = file_get_contents($url);
	echo json_encode($data);
}