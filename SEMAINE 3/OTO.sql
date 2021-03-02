  
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `oto` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `oto`;

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `categorie_id` int(11) NOT NULL AUTO_INCREMENT,
  `categorie_libellé` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`categorie_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `categories` (`categorie_id`, `categorie_libellé`) VALUES
(1, 'vehicule_particulier'),
(2, 'vehicule_utilitaire'),
(3, 'reparation et entretien'),
(4, 'pose accessoires et options');

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `client_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_libelle` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_addresse` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `clients` (`client_id`, `client_libelle`, `client_type`, `client_addresse`) VALUES
(1, 'Dave Loper', 'particulier', ''),
(2, 'RentCar', 'professionnel', '');

DROP TABLE IF EXISTS `vehicules`;
CREATE TABLE IF NOT EXISTS `vehicules` (
  `vehicule_id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicule_cat_id` int(11) NOT NULL,
  `vehicule_etat` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vehicule_marque` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vehicule_couleur` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vehicule_prix` int(11) NOT NULL,
  `vehicule_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vehicule_stock` int(11) NOT NULL,
  `vehicule_photo` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vehicule_date_ajout` date DEFAULT NULL,
  `vehicule_date_modif` datetime DEFAULT NULL,
  `vehicule_bloque` int(11) DEFAULT NULL,
  PRIMARY KEY (`vehicule_id`),
  KEY `FK_vehicule_cat_id` (`vehicule_cat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `vehicules` (`vehicule_id`, `vehicule_cat_id`, `vehicule_etat`, `vehicule_marque`, `vehicule_couleur`, `vehicule_prix`, `vehicule_description`, `vehicule_stock`, `vehicule_photo`, `vehicule_date_ajout`, `vehicule_date_modif`, `vehicule_bloque`) VALUES
(1, 2, 'occasion', 'Citroen', 'gris', 8000, 'trés bonne voiture', 3, 'jpg', '2021-02-14', '2021-02-14 00:00:00', 0),
(2, 1, 'neuf', 'Ford', 'blue', 20000, 'belle voiture', 2, 'jpg', '2021-02-15', '2021-02-15 00:00:00', 0);

DROP TABLE IF EXISTS `ventes`;
CREATE TABLE IF NOT EXISTS `ventes` (
  `vente_id` int(11) NOT NULL AUTO_INCREMENT,
  `vente_date` date NOT NULL,
  `vente_mode_paiement` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vente_client_id` int(11) NOT NULL,
  PRIMARY KEY (`vente_id`),
  KEY `vente_client_id` (`vente_client_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `ventes` (`vente_id`, `vente_date`, `vente_mode_paiement`, `vente_client_id`) VALUES
(1, '2021-02-15', 'crédit', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;