<?php
// Masukin nilai dari form tadi
$tahun_i   = $_POST['t1'];
$tahun_ii  = $_POST['t2'];
$tahun_iii = $_POST['t3'];
$tahun_iv  = $_POST['t4'];
$harga_i   = $_POST['h1']; 
$harga_ii  = $_POST['h2'];
$harga_iii = $_POST['h3'];
$harga_iv  = $_POST['h4'];
$alpha = 1 / 2;
// Proses hitung
$ma_i   = ($harga_i + $harga_ii) / 2;
$ma_ii  = ($harga_ii + $harga_iii) / 2;
$ma_iii = ($harga_iii + $harga_iv) / 2;

$at_i   = 2 * $harga_ii - $ma_i;
$at_ii  = 2 * $harga_iii - $ma_ii;
$at_iii = 2 * $harga_iv - $ma_iii;

$bt_i   = ($alpha / (1 - $alpha)*($harga_ii - $ma_i));
$bt_ii  = ($alpha / (1 - $alpha)*($harga_iii - $ma_ii));
$bt_iii = ($alpha / (1- $alpha) * ($harga_iv - $ma_iii));

$ft_i  = $at_i + $bt_i;
$ft_ii = $at_ii + $bt_ii;
?>
<!DOCTYPE html>
<html>
<body>

<table cellspacing="0" border="1" style="width: 100%">
  <tr>
    <td>Tahun</td>
    <td>Harga</td> 
    <td>MA</td>
    <td>AT</td>
    <td>BT</td>
    <td>FT</td>
  </tr>
  <tr>
    <td><?php echo $tahun_i;?></td>
    <td><?php echo number_format($harga_i);?></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
 	<td><?php echo $tahun_ii;?></td>
    <td><?php echo number_format($harga_ii);?></td>
    <td><?php echo number_format($ma_i);?></td>
    <td><?php echo number_format($at_i);?></td>
    <td><?php echo number_format($bt_i);?></td>
    <td></td>
  </tr>
  <tr>
    <td><?php echo $tahun_iii;?></td>
    <td><?php echo number_format($harga_iii);?></td>
    <td><?php echo number_format($ma_ii);?></td>
    <td><?php echo number_format($at_ii);?></td>
    <td><?php echo number_format($bt_ii);?></td>
    <td><?php echo number_format($ft_i);?></td>
  </tr><tr>
    <td><?php echo $tahun_iii;?></td>
    <td><?php echo number_format($harga_iv);?></td>
    <td><?php echo number_format($ma_iii);?></td>
    <td><?php echo number_format($at_iii);?></td>
    <td><?php echo number_format($bt_iii);?></td>
    <td><?php echo number_format($ft_ii);?></td>
  </tr>
</table>
<table table border="0" width="100%">
  <tr>
  <td style="width: 600x"> <h1 style="font-size:200%;">Nilai prediksi tahun 2020 = <?php echo number_format($ft_ii);?></h1></td>
  </tr>
</table>
<button><a href="proses_manual.php" style="text-decoration:none;">Kembali</a></button>
</body>
</html>