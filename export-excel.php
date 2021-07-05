<html>
<head>
	<title>Prediksi Simple Moving Average</title>
</head>
<body>
	<style type="text/css">
	body{
		font-family: sans-serif;
	}
	table{
		margin: 20px auto;
		border-collapse: collapse;
	}
	table th,
	table td{
		border: 1px solid #3c3c3c;
		padding: 3px 8px;
 
	}
	a{
		background: blue;
		color: #fff;
		padding: 8px 10px;
		text-decoration: none;
		border-radius: 2px;
	}
	</style>
 
	<?php
	header("Content-type: application/vnd-ms-excel");
	header("Content-Disposition: attachment; filename=Hasil Perhitungan Mamdani.xls");
	?>
 
	<center>
		<h1>Hasil Perhitungan Simple Moving Average</h1>
	</center>
 
	<table border="1">
		<tr>
            <th>NO</th>
            <th>Kecamatan</th>
            <th>Tipe</th>
            <th>Prediksi harga</th>
   
        </tr>
        <?php
        include 'koneksi.php';
        $query = mysqli_query($koneksi, $sqltxt);
        while($query= mysqli_fetch_array($query)){
        ?>
        <tr>
        	<td><?= $data['no'] ?></td>
            <td><?= $data['Kecamatan'] ?></td>
            <td><?= $data['Tipe'] ?></td>
            <td><?= $data['Prediksi HARGA'] ?></td>

        </tr>
        <?php } ?>
	</table>
</body>
</html>