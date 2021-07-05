-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.31-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table db_mamdani.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `id_admin` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `user` varchar(50) NOT NULL,
  `pass` varchar(500) NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db_mamdani.admin: ~1 rows (approximately)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`id_admin`, `nama`, `user`, `pass`) VALUES
	(1, 'Nafana Channel', 'nafana', '65b547721fa377bfd783d8fa0e4cfc86');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- Dumping structure for table db_mamdani.data_rumah
CREATE TABLE IF NOT EXISTS `data_rumah` (
  `no` int(11) DEFAULT NULL,
  `nama_proyek` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `kota` varchar(255) DEFAULT NULL,
  `LB` double DEFAULT NULL,
  `LT` double DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `tahun` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db_mamdani.data_rumah: ~2 rows (approximately)
/*!40000 ALTER TABLE `data_rumah` DISABLE KEYS */;
INSERT INTO `data_rumah` (`no`, `nama_proyek`, `kecamatan`, `kota`, `LB`, `LT`, `harga`, `tahun`) VALUES
	(1, 'Griya Cilengkrang Indah', 'Ujung Berung', 'Bandung', 36, 84, 278696000, '2016'),
	(2, 'Griya Cilengkrang Indah', 'Ujung Berung', 'Bandung', 37, 201, 527420000, '2016');
/*!40000 ALTER TABLE `data_rumah` ENABLE KEYS */;

-- Dumping structure for table db_mamdani.hasil_prediksi
CREATE TABLE IF NOT EXISTS `hasil_prediksi` (
  `id_prediksi` int(11) NOT NULL,
  `bulan` varchar(50) NOT NULL,
  `tahun` varchar(50) NOT NULL,
  `permintaan` varchar(50) NOT NULL,
  `persediaan` varchar(50) NOT NULL,
  `hasil_prediksi` varchar(50) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  PRIMARY KEY (`id_prediksi`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db_mamdani.hasil_prediksi: ~2 rows (approximately)
/*!40000 ALTER TABLE `hasil_prediksi` DISABLE KEYS */;
INSERT INTO `hasil_prediksi` (`id_prediksi`, `bulan`, `tahun`, `permintaan`, `persediaan`, `hasil_prediksi`, `keterangan`) VALUES
	(1, 'Agustus', '2018', '56000', '4060', '47835', 'PRODUKSI BERKURANG'),
	(2, 'September', '2018', '40000', '3000', '38503', 'PRODUKSI BERKURANG');
/*!40000 ALTER TABLE `hasil_prediksi` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
