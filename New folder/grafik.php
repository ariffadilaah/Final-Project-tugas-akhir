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

  <?php 
	$kecamatan		= $_POST['kecamatan'];
	$tipe			= $_POST['tipe'];
	
	$koneksi=mysqli_connect('localhost','root','');  
  						mysqli_select_db($koneksi,'db_mamdani');
						$sqltxt = "SELECT * FROM data_kecamatan WHERE id = $kecamatan ORDER BY id";
						$query=mysqli_query($koneksi,$sqltxt);
						$data=mysqli_fetch_array($query);
						
						$nama_kecamatan = $data['kecamatan'];
	
  	$link = "ambil_data.php?kecamatan=$kecamatan&tipe=$tipe";
  ?>

<body id="page-top" onload="getData('<?php echo $link;?>')">

  <!-- Page Wrapper -->
  <div id="wrapper">

<?php include "menu.php";?>
    

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
            <div class="card-body">
              <div class="table-responsive">
                
                <!-- Style custom -->
              <style>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>Page Perhitungan</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" type="text/css" media="screen" href="main.css">
                <script src="main.js"></script>
                </head>table {
                  font-family: arial, sans-serif;
                  border-collapse: collapse;
                  width: 100%;
                }

                td, th {
                  border: 1px solid #dddddd;
                  text-align: center;
                  padding: 8px;
                }

                tr:nth-child(even) {
                  background-color: #dddddd;
                }
              </style>

              <table>
	 <h4 align="center" style="font-weight:bold"> GRAFIK DATA HARGA RUMAH </h4><div align="center"></canvas></div><hr>
				 <h5 align="center"> Kecamatan : <?php echo $nama_kecamatan;?>  - Tipe Rumah : <?php echo $tipe;?> </h5>
				 <div align="center"><canvas id="lineChart" style="height:35vh; width:60vw"></canvas></div><br>
              </table>
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
<!--   <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  </div> -->

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
  
  
  <script>
  	
	function getData(link_file){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {		
			showLineChart(this.responseText);
		  }
		};
		xmlhttp.open("GET",link_file,true);
		xmlhttp.send();

	}
	
	
	function showLineChart(data){
			data = JSON.parse(data);

			console.log(data);
            var tahun = [];
            var harga = [];
			
			for (var i in data) {
                        tahun.push(data[i]['tahun']);
                        harga.push(data[i]['harga']);
                    }
	
			var chartdata = {
                        labels: tahun,
                        datasets: [
                            {
                                label: 'Harga Rumah',
                                backgroundColor: 'rgba(0, 132, 12, .2)',
                                borderColor: 'rgba(14, 200, 9, .7)',
                                hoverBackgroundColor: '#CCCCCC',
                                hoverBorderColor: '#666666',
                                data: harga
                            }
                        ]
                    };
					
			
			var ctxL = document.getElementById("lineChart").getContext('2d');
			var myLineChart = new Chart(ctxL, {
			type: 'line',
			data: chartdata,
			options: {
				responsive: true
					}
                    });
		
	}
	
  </script>

</body>

</html>
