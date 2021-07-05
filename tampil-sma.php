<?php session_start();?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Prediksi Moving Average</title>

  <!-- Custom fonts for this template -->
  <link rel="stylesheet" type="text/css" href="semantic/semantic.min.css">
  <link href="bootstrap/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="bootstrap/css/sb-admin-2.min.css" rel="stylesheet">

  <!-- Custom styles for this page -->
  <link href="bootstrap/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
  
  <link href="bootstrap/css/sipe.sweetalert.css" rel="stylesheet">
	
  <!-- Semantic here -->
  <script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script src="semantic/semantic.min.js"></script>
</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

<?php include "menu.php";?>
    
  <?php
  $koneksi=mysqli_connect('localhost','root','');  
  mysqli_select_db($koneksi,'db_mamdani');
  
  if(isset($_GET['proses'])){

	  	$kecamatan=$_GET['kecamatan'];
		$tipe=$_GET['tipe'];
		
		$sqltxt = "SELECT * FROM data_hasil WHERE id_kecamatan = $kecamatan AND tipe = $tipe";
		$query=mysqli_query($koneksi,$sqltxt);
		
		$num=mysqli_num_rows($query);
		if($num>0){
			$sqltxt2 = "DELETE FROM data_hasil WHERE id_kecamatan = $kecamatan AND tipe = $tipe";
			$query2=mysqli_query($koneksi,$sqltxt2);
		}
		
		if(isset($_SESSION['hasil_prediksi'])){
			$hasil_prediksi = $_SESSION['hasil_prediksi'];
		} else {
			$hasil_prediksi = 0;
		}		
			
		$sqltxt3 = "INSERT INTO data_hasil VALUES (0,$kecamatan,$tipe,$hasil_prediksi)";
		$query3=mysqli_query($koneksi,$sqltxt3);
	}
  ?>

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">PREDIKSI HARGA RUMAH DI KOTA BANDUNG DENGAN
MENGGUNAKAN METODE MOVING AVERAGE</span>
                <img src="telkom_logo.png" width="73" height="84" style="margin-top: 25px">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <!-- <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> -->
                  Arif Fadilah (1103160163) - Telkom University, 2020
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
        
			
            <div class="card-body">
              <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <tr>
                    <th>NO</th>
                    <th>Kecamatan</th>
					<th>Tahun</th>
                    <th>Tipe</th>
                    <th>Harga</th>
					<th>MA</th>    
					<th>At</th>    
					<th>Bt</th>    
					<th>Ft</th>                        
                  </tr>
                  <?php
				  
				  $halaman = 15;
                  $page = isset($_GET["halaman"]) ? (int)$_GET["halaman"] : 1;
                  $mulai = ($page>1) ? ($page * $halaman) - $halaman : 0;
                  $data_nilai = $_SESSION['data_nilai'];
                  $total = count($data_nilai);
                  $pages = ceil($total/$halaman);            
                  $no =$mulai+1;
				  
				  if(($no+$halaman)>$total){
				  	$last=$no+$total;
				  }

                 	if(isset($_SESSION['data_nilai'])){
						for($i=$no;$i<$last;$i++){
							$idx = $i-1;
							$baris=$data_nilai[$idx];
                  ?>
                  <tbody>
                    <tr>
                      <td><?= $i ?></td>
                      <td><?= $baris[2] ?></td>
                      <td><?= $baris[1] ?></td>
                      <td><?= $baris[3] ?></td>
                      <td><?= $baris[4] ?></td>
					  <td><?= $baris[5] ?></td>
                      <td><?= $baris[6] ?></td>
                      <td><?= $baris[7] ?></td>
                      <td><?= $baris[8] ?></td>
					  <td><?= $baris[9] ?></td>
					  


                    </tr>
                    <?php }} ?>
                  </tbody>
              </table>
              <hr>
              <!-- Pagging -->
              <div>
                <?php for ($i=1; $i<=$pages ; $i++){ 
						$link = "?halaman=$i";
				?>
                <a class="btn btn-info btn-md" href="<?php echo $link; ?>"><?php echo $i; ?></a>
                <?php } ?>
              </div> 
             </div>
            </div>
          </div>
        </div>
      <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Arif Fadilah - Telkom University, 2020</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Apakah kamu yakin ingin Keluar.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="index.php">Logout</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    $(document).ready(function(){
      $('.data').datatables();
    });
  </script>
  <!-- Bootstrap core JavaScript-->
  <script src="bootstrap/vendor/jquery/jquery.min.js"></script>
  <script src="bootstrap/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="bootstrap/vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="bootstrap/js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="bootstrap/vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="bootstrap/vendor/datatables/dataTables.bootstrap4.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="bootstrap/js/demo/datatables-demo.js"></script>
  
  <script src="bootstrap/js/sipe.sweetalert.js"></script>
  
  <script src="bootstrap/vendor/chart.js/Chart.js"></script>
	
  <?php 
	if(isset($_GET['err']) && $_GET['err']==1){
		        echo "<script language='javascript'>swal('Oops...', 'Ada Kesalahan di Sistem atau Tidak Ada Data Rumah Untuk Kecamatan dan Tipe Tersebut!', 'error');</script>" ;
	}
	
	if(isset($_GET['proses']) && $_GET['proses']==1){
	  		echo "<script language='javascript'>swal('Informasi...', 'Hasil Perhitungan Moving Average Berhasil Ditampilkan!', 'success');</script>";
	}
?>
</body>

</html>

