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


-- Dumping database structure for db_mamdani
CREATE DATABASE IF NOT EXISTS `db_mamdani` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `db_mamdani`;

-- Dumping structure for table db_mamdani.data_hasil
CREATE TABLE IF NOT EXISTS `data_hasil` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_kecamatan` int(11) NOT NULL DEFAULT '0',
  `tipe` int(11) DEFAULT NULL,
  `prediksi` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Dumping data for table db_mamdani.data_hasil: ~4 rows (approximately)
/*!40000 ALTER TABLE `data_hasil` DISABLE KEYS */;
INSERT INTO `data_hasil` (`id`, `id_kecamatan`, `tipe`, `prediksi`) VALUES
	(5, 1, 5, 438000002),
	(6, 1, 2, 482200002),
	(8, 4, 2, 378600002),
	(20, 1, 1, 327850002);
/*!40000 ALTER TABLE `data_hasil` ENABLE KEYS */;

-- Dumping structure for table db_mamdani.data_kecamatan
CREATE TABLE IF NOT EXISTS `data_kecamatan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kecamatan` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Dumping data for table db_mamdani.data_kecamatan: ~11 rows (approximately)
/*!40000 ALTER TABLE `data_kecamatan` DISABLE KEYS */;
INSERT INTO `data_kecamatan` (`id`, `kecamatan`) VALUES
	(1, 'Ujung Berung'),
	(2, 'Antapani'),
	(3, 'Arcamanik'),
	(4, 'Cibiru'),
	(5, 'Gedebage'),
	(6, 'Mandalajati'),
	(7, 'Rancasari'),
	(8, 'Buahbatu'),
	(9, 'Kiaracondong'),
	(10, 'Cinambo'),
	(11, 'Panyileukan');
/*!40000 ALTER TABLE `data_kecamatan` ENABLE KEYS */;

-- Dumping structure for table db_mamdani.data_rumah
CREATE TABLE IF NOT EXISTS `data_rumah` (
  `no` int(11) NOT NULL,
  `tahun` varchar(4) DEFAULT NULL,
  `id_kecamatan` int(11) DEFAULT NULL,
  `tipe` int(11) DEFAULT NULL,
  `harga` double DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db_mamdani.data_rumah: ~255 rows (approximately)
/*!40000 ALTER TABLE `data_rumah` DISABLE KEYS */;
INSERT INTO `data_rumah` (`no`, `tahun`, `id_kecamatan`, `tipe`, `harga`) VALUES
	(1, '2016', 1, 1, 350000000),
	(2, '2016', 1, 1, 382225000),
	(3, '2016', 1, 2, 450000000),
	(4, '2016', 1, 2, 410000000),
	(5, '2016', 1, 3, 300000000),
	(6, '2016', 1, 4, 460000000),
	(7, '2016', 1, 4, 457600000),
	(8, '2016', 1, 5, 410000000),
	(9, '2016', 1, 5, 457500000),
	(10, '2016', 1, 7, 1250000000),
	(11, '2016', 1, 7, 790000000),
	(12, '2016', 2, 1, 567800000),
	(13, '2016', 2, 3, 80000677),
	(14, '2016', 2, 4, 486750000),
	(15, '2016', 2, 12, 1400000000),
	(16, '2016', 2, 12, 1450000000),
	(17, '2016', 2, 2, 425000000),
	(18, '2016', 2, 5, 487900000),
	(19, '2016', 2, 11, 830000000),
	(20, '2016', 3, 1, 285000000),
	(21, '2016', 3, 4, 645500000),
	(22, '2016', 3, 1, 345000000),
	(23, '2016', 3, 4, 782000000),
	(24, '2016', 3, 8, 1125000000),
	(25, '2016', 3, 6, 452340000),
	(26, '2016', 4, 1, 211320000),
	(27, '2016', 4, 1, 454579000),
	(28, '2016', 4, 2, 367000000),
	(29, '2016', 4, 5, 679500000),
	(30, '2016', 4, 4, 640000000),
	(31, '2016', 4, 11, 1300000000),
	(32, '2016', 4, 1, 578670000),
	(33, '2016', 5, 1, 430000000),
	(34, '2016', 5, 2, 645000000),
	(35, '2016', 5, 1, 345000000),
	(36, '2016', 5, 3, 422220000),
	(37, '2016', 5, 11, 956000000),
	(38, '2016', 5, 2, 727155608),
	(39, '2016', 6, 1, 390700000),
	(40, '2016', 6, 2, 411200000),
	(41, '2016', 6, 1, 592000600),
	(42, '2016', 6, 4, 590000000),
	(43, '2016', 6, 5, 650000000),
	(44, '2016', 6, 1, 384976250),
	(45, '2016', 7, 1, 304709750),
	(46, '2016', 7, 2, 425000000),
	(47, '2016', 7, 5, 524567000),
	(48, '2016', 7, 4, 450000000),
	(49, '2016', 7, 3, 227670000),
	(50, '2016', 7, 6, 656000000),
	(51, '2016', 8, 2, 445000000),
	(52, '2016', 8, 1, 394400000),
	(53, '2016', 8, 3, 265450000),
	(54, '2016', 8, 11, 1200000000),
	(55, '2016', 8, 5, 620000000),
	(56, '2016', 8, 2, 432200000),
	(57, '2016', 9, 1, 132000000),
	(58, '2016', 9, 2, 292000000),
	(59, '2016', 9, 5, 572000000),
	(60, '2016', 9, 1, 146789000),
	(61, '2016', 10, 1, 300000000),
	(62, '2016', 10, 5, 423000000),
	(63, '2016', 11, 2, 500000000),
	(64, '2016', 11, 1, 234000000),
	(65, '2017', 1, 1, 350500000),
	(66, '2017', 1, 1, 383000000),
	(67, '2017', 1, 2, 455000000),
	(68, '2017', 1, 2, 430000000),
	(69, '2017', 1, 3, 300500000),
	(70, '2017', 1, 4, 470000000),
	(71, '2017', 1, 4, 460000000),
	(72, '2017', 1, 5, 420000000),
	(73, '2017', 1, 5, 459999999),
	(74, '2017', 1, 7, 800000000),
	(75, '2017', 1, 7, 1255000000),
	(76, '2017', 2, 1, 568000000),
	(77, '2017', 2, 3, 81000000),
	(78, '2017', 2, 4, 487750000),
	(79, '2017', 2, 12, 1400500000),
	(80, '2017', 2, 12, 1455000000),
	(81, '2017', 2, 2, 427000000),
	(82, '2017', 2, 5, 490000000),
	(83, '2017', 2, 11, 833000000),
	(84, '2017', 3, 1, 290000000),
	(85, '2017', 3, 4, 647000000),
	(86, '2017', 3, 1, 347000000),
	(87, '2017', 3, 4, 783900999),
	(88, '2017', 3, 8, 1150000000),
	(89, '2017', 3, 6, 453000000),
	(90, '2017', 4, 1, 215000000),
	(91, '2017', 4, 1, 456000000),
	(92, '2017', 4, 2, 370000000),
	(93, '2017', 4, 5, 680000000),
	(94, '2017', 4, 4, 650000000),
	(95, '2017', 4, 11, 1350000000),
	(96, '2017', 4, 1, 580000000),
	(97, '2017', 5, 1, 435000000),
	(98, '2017', 5, 5, 646000000),
	(99, '2017', 5, 1, 347567908),
	(100, '2017', 5, 3, 422999999),
	(101, '2017', 5, 11, 958000000),
	(102, '2017', 5, 2, 728000000),
	(103, '2017', 6, 1, 392100000),
	(104, '2017', 6, 2, 412000000),
	(105, '2017', 6, 1, 594000000),
	(106, '2017', 6, 4, 591900000),
	(107, '2017', 6, 5, 652000000),
	(108, '2017', 6, 1, 385500000),
	(109, '2017', 7, 1, 305900000),
	(110, '2017', 7, 2, 427100000),
	(111, '2017', 7, 5, 525200000),
	(112, '2017', 7, 4, 455000000),
	(113, '2017', 7, 3, 229000000),
	(114, '2017', 7, 6, 658000000),
	(115, '2017', 8, 2, 447000000),
	(116, '2017', 8, 1, 396000000),
	(117, '2017', 8, 3, 267400000),
	(118, '2017', 8, 11, 1210000000),
	(119, '2017', 8, 5, 621900999),
	(120, '2017', 8, 2, 435230000),
	(121, '2017', 9, 1, 134000000),
	(122, '2017', 9, 2, 294000000),
	(123, '2017', 9, 5, 574000000),
	(124, '2017', 9, 1, 149000000),
	(125, '2017', 10, 1, 325000000),
	(126, '2017', 10, 5, 425000000),
	(127, '2017', 11, 2, 525000000),
	(128, '2017', 11, 1, 236000000),
	(129, '2018', 1, 1, 351000000),
	(130, '2018', 1, 1, 385550000),
	(131, '2018', 1, 2, 460100000),
	(132, '2018', 1, 2, 450000000),
	(133, '2018', 1, 3, 301999000),
	(134, '2018', 1, 4, 473400000),
	(135, '2018', 1, 4, 463000000),
	(136, '2018', 1, 5, 440000000),
	(137, '2018', 1, 5, 462000000),
	(138, '2018', 1, 7, 825000000),
	(139, '2018', 1, 7, 1260000000),
	(140, '2018', 2, 1, 570000000),
	(141, '2018', 2, 3, 83900000),
	(142, '2018', 2, 4, 490000000),
	(143, '2018', 2, 12, 1403000000),
	(144, '2018', 2, 12, 1460000000),
	(145, '2018', 2, 2, 432000000),
	(146, '2018', 2, 5, 493423566),
	(147, '2018', 2, 11, 837000000),
	(148, '2018', 3, 1, 299900000),
	(149, '2018', 3, 4, 649999000),
	(150, '2018', 3, 1, 349000999),
	(151, '2018', 3, 4, 785000999),
	(152, '2018', 3, 8, 1175000000),
	(153, '2018', 3, 6, 456000000),
	(154, '2018', 4, 1, 219250000),
	(155, '2018', 4, 1, 458000000),
	(156, '2018', 4, 2, 374300000),
	(157, '2018', 4, 5, 681230000),
	(158, '2018', 4, 4, 460000000),
	(159, '2018', 4, 11, 1400000000),
	(160, '2018', 4, 1, 583425000),
	(161, '2018', 5, 1, 439999000),
	(162, '2018', 5, 5, 648000000),
	(163, '2018', 5, 1, 349125500),
	(164, '2018', 5, 3, 424000000),
	(165, '2018', 5, 11, 963000000),
	(166, '2018', 5, 2, 729900999),
	(167, '2018', 6, 1, 394200000),
	(168, '2018', 6, 2, 413900000),
	(169, '2018', 6, 1, 596000000),
	(170, '2018', 6, 4, 593000000),
	(171, '2018', 6, 5, 655000000),
	(172, '2018', 6, 1, 387800000),
	(173, '2018', 7, 1, 308000999),
	(174, '2018', 7, 2, 429000000),
	(175, '2018', 7, 5, 528300000),
	(176, '2018', 7, 4, 459999000),
	(177, '2018', 7, 3, 232000000),
	(178, '2018', 7, 6, 660000000),
	(179, '2018', 8, 2, 449000000),
	(180, '2018', 8, 1, 398000200),
	(181, '2018', 8, 3, 269100000),
	(182, '2018', 8, 11, 1220000000),
	(183, '2018', 8, 5, 623999000),
	(184, '2018', 8, 2, 438900999),
	(185, '2018', 9, 1, 136000000),
	(186, '2018', 9, 2, 296000000),
	(187, '2018', 9, 5, 576000900),
	(188, '2018', 9, 1, 153300999),
	(189, '2018', 10, 1, 350000000),
	(190, '2018', 10, 5, 429000000),
	(191, '2018', 11, 2, 550000000),
	(192, '2018', 11, 1, 240000000),
	(193, '2019', 1, 1, 356700000),
	(194, '2019', 1, 1, 389999999),
	(195, '2019', 1, 2, 466100000),
	(196, '2019', 1, 2, 460700000),
	(197, '2019', 1, 3, 304000000),
	(198, '2019', 1, 4, 476760000),
	(199, '2019', 1, 4, 468800000),
	(200, '2019', 1, 5, 450000000),
	(201, '2019', 1, 5, 466600000),
	(202, '2019', 1, 7, 850000000),
	(203, '2019', 1, 7, 1280000000),
	(204, '2019', 2, 1, 575400000),
	(205, '2019', 2, 3, 86000000),
	(206, '2019', 2, 4, 500000000),
	(207, '2019', 2, 12, 1406500000),
	(208, '2019', 2, 12, 1480000000),
	(209, '2019', 2, 2, 435000000),
	(210, '2019', 2, 5, 497000999),
	(211, '2019', 2, 11, 840000000),
	(212, '2019', 3, 1, 305000000),
	(213, '2019', 3, 4, 654000000),
	(214, '2019', 3, 1, 355000000),
	(215, '2019', 3, 4, 780100000),
	(216, '2019', 3, 8, 1200000000),
	(217, '2019', 3, 6, 461200000),
	(218, '2019', 4, 1, 222000000),
	(219, '2019', 4, 1, 462325000),
	(220, '2019', 4, 2, 378000000),
	(221, '2019', 4, 5, 684390000),
	(222, '2019', 4, 4, 467550000),
	(223, '2019', 4, 11, 1425000000),
	(224, '2019', 4, 1, 588400000),
	(225, '2019', 5, 1, 444000000),
	(226, '2019', 4, 5, 651200000),
	(227, '2019', 5, 1, 354500000),
	(228, '2019', 5, 3, 429000000),
	(229, '2019', 5, 11, 970000000),
	(230, '2019', 5, 2, 735999000),
	(231, '2019', 6, 1, 398200000),
	(232, '2019', 6, 2, 418000000),
	(233, '2019', 6, 1, 600000000),
	(234, '2019', 6, 4, 600000000),
	(235, '2019', 6, 1, 393200000),
	(236, '2019', 7, 1, 314000200),
	(237, '2019', 7, 2, 434000000),
	(238, '2019', 7, 5, 533300000),
	(239, '2019', 7, 4, 465000000),
	(240, '2019', 7, 3, 236500000),
	(241, '2019', 7, 6, 664000000),
	(242, '2019', 8, 2, 454000500),
	(243, '2019', 8, 1, 400000000),
	(244, '2019', 8, 3, 272325500),
	(245, '2019', 8, 11, 1250000000),
	(246, '2019', 8, 5, 629999999),
	(247, '2019', 8, 2, 445550000),
	(248, '2019', 9, 1, 140000000),
	(249, '2019', 9, 2, 300000000),
	(250, '2019', 9, 5, 580000000),
	(251, '2019', 9, 1, 156000000),
	(252, '2019', 10, 1, 360000000),
	(253, '2019', 10, 5, 433300000),
	(254, '2019', 11, 2, 600000000),
	(255, '2019', 11, 1, 245000000);
/*!40000 ALTER TABLE `data_rumah` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
