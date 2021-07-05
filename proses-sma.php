<?php
session_start();
include 'koneksi.php';
$kecamatan		= $_POST['kecamatan'];
$tipe		= $_POST['tipe'];

$sql_txt = "SELECT a.no, a.tahun, b.kecamatan, a.tipe, a.harga FROM data_rumah a JOIN data_kecamatan b ON a.id_kecamatan = b.id WHERE a.id_kecamatan = ".$kecamatan." AND a.tipe=".$tipe." ORDER BY a.tahun ASC";

$sql = mysqli_query($koneksi, $sql_txt) or die(mysqli_error());
$num = mysqli_num_rows($sql);

if($num > 0){
	
	$data_nilai = array();
	$idx = 4; //indeks harga
	
	$step = 2;
	$hasil_prediksi = 0;
	
	for($i=0; $i < $num; $i++){
		$data=mysqli_fetch_array($sql);
		
		$baris = array();
		$baris = $data;
		$baris[$idx + 1] = '';
		$baris[$idx + 2] = '';
		$baris[$idx + 3] = '';
		$baris[$idx + 4] = '';
		$baris[$idx + 5] = '';
		
		
		if($i>0){
			$baris_sblm = $data_nilai[$i-($step-1)];
			$MA = ($baris_sblm[$idx] +  $baris[$idx]) / $step;
			
			$baris[$idx + 1] = $MA;
			
			$at = $baris[$idx] + ($baris[$idx] - $baris[$idx + 1]);
			$baris[$idx + 2] = $at;
							
			$bt = (2/(2-1))+($baris[$idx]-$baris[$idx + 1]);
			$baris[$idx + 3] = $bt;
			
						
			if($i>1){							
				$baris[$idx + 4]  = $baris_sblm[$idx + 2] + ($baris_sblm[$idx + 3] * 1);
				$hasil_prediksi = $baris[$idx + 4];
							
			}
		}
		
		$data_nilai[$i] = $baris;
	}
	
	$_SESSION['data_nilai'] = $data_nilai;
	$_SESSION['hasil_prediksi']= $hasil_prediksi;
	
	header("location:tampil-sma.php?kecamatan=$kecamatan&tipe=$tipe&proses=1");
} else {
	header("location:tampil-sma.php?err=1");
}


?>