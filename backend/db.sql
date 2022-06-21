

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


DROP TABLE IF EXISTS `notes`;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) , 
  `title` varchar(30) NOT NULL,
  `body` varchar(512),
  `edited` varchar(30),
  `state` int(1) NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


INSERT INTO `notes` (`id`, `user_id`, `title`, `body`,`edited`, `state`) VALUES
	(1, 1, 'Nota 1' , 'Contenido de la nota 1...' ,'2022-6-18',0 );
INSERT INTO `notes` (`id`, `user_id`, `title`, `body`,`edited`, `state`) VALUES
	(2, 1, 'Nota 2' , 'Contenido de la nota 2...' ,'2022-6-18',0 );

INSERT INTO `notes` (`id`, `user_id`, `title`, `body`,`edited`, `state`) VALUES
	(3, 1, 'Nota 3' , 'Contenido de la nota 3 archivada...' ,'2022-6-18',1 );
INSERT INTO `notes` (`id`, `user_id`, `title`, `body`,`edited`, `state`) VALUES
	(4, 1, 'Nota 4' , 'Contenido de la nota 4...' ,'2022-6-18',0 );

INSERT INTO `notes` (`id`, `user_id`, `title`, `body`,`edited`, `state`) VALUES
	(5, 1, 'Nota 5' , 'Contenido de la nota 5 archivada...' ,'2022-6-18',1 );
INSERT INTO `notes` (`id`, `user_id`, `title`, `body`,`edited`, `state`) VALUES
	(6, 1, 'Nota 6' , 'Contenido de la nota 6...' ,'2022-6-18',0 );
  