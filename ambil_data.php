<?php
session_start();
include 'koneksi.php';
$kecamatan		= $_GET['kecamatan'];
$tipe		= $_GET['tipe'];

$sql_txt = "SELECT tahun, AVG(harga) AS hrg FROM data_rumah WHERE id_kecamatan = ".$kecamatan." AND tipe = ".$tipe." GROUP BY tahun ORDER BY tahun ASC";

$sql = mysqli_query($koneksi, $sql_txt) or die(mysqli_error($koneksi));
$num = mysqli_num_rows($sql);

if($num > 0){
	
	$all_data = array();
	
	for($i=0; $i < $num; $i++){
		$data=mysqli_fetch_array($sql);
		
		$no = $i + 1;
		$in_data = array();
		$in_data["0"] = "Tahun ".$data["tahun"];
		$in_data["tahun"] = "Tahun ".$data["tahun"];
		$in_data["1"] = $data["hrg"];
		$in_data["harga"] = $data["hrg"];
		
		$all_data[] = $in_data;		
		
	}
	
}


$sql_txt2 = "SELECT prediksi FROM data_hasil WHERE id_kecamatan = ".$kecamatan." AND tipe = ".$tipe;

$sql2 = mysqli_query($koneksi, $sql_txt2) or die(mysqli_error($koneksi));
$num2 = mysqli_num_rows($sql2);

if($num2 > 0){
	
	for($i=0; $i < $num2; $i++){
		$data2=mysqli_fetch_array($sql2);
				
		$in_data = array();
		$in_data["0"] = "Prediksi - Tahun ".date("Y");
		$in_data["tahun"] = "Prediksi - Tahun ".date("Y");
		$in_data["1"] = $data2["prediksi"];
		$in_data["harga"] = $data2["prediksi"];
		
		$all_data[] = $in_data;		
		
	}
	
} else {
	$in_data = array();
		$in_data["0"] = "Belum Prediksi - Thn. ".date("Y");
		$in_data["tahun"] = "Belum Prediksi - Thn. ".date("Y");
		$in_data["1"] = 0;
		$in_data["harga"] = 0;
		
		$all_data[] = $in_data;		
	
}

	mysqli_close($koneksi);
	echo json_encode($all_data);

?>