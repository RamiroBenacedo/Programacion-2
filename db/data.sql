CREATE DATABASE  IF NOT EXISTS usuarios;

USE usuarios;

CREATE TABLE usuario (
	/* nombreDeColumna  tipoDeDato  restricciones */
	id       INT         UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	contrasena          VARCHAR(50) NOT NULL,
	email            VARCHAR(50) NOT NULL UNIQUE,
    nombre              VARCHAR(250) NOT NULL,
	foto_de_perfil       VARCHAR(50) NULL,
	fecha_nacimiento             DATE NULL,
	dni                  int(11) NOT NULL UNIQUE,
	createdAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    );



CREATE TABLE posteosUsuario (
/* nombreDeColumna  tipoDeDato  restricciones */
id                 		INT         	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
clienteId				INT UNSIGNED,
nombreUsuario		    VARCHAR(200)	NOT NULL,
fotoPerfil		        VARCHAR(200)	NOT NULL,
nombreImg               VARCHAR(200)	NOT NULL,
textonombre             VARCHAR(200)	NOT NULL,
textoposteo             VARCHAR(200)	NOT NULL,
createdAt               TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
updatedAt               TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt               TIMESTAMP 		NULL,
FOREIGN KEY (clienteId) REFERENCES usuario (id)
);


CREATE TABLE tabladecomentario (
/* nombreDeColumna  tipoDeDato  restricciones */
id       		        INT         	    UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idPost				    INT                 UNSIGNED,
idUsuario               INT                 UNSIGNED,
campoTextoNombreImg		VARCHAR(200)	    NOT NULL,
nombreUsuarioComentario VARCHAR(200)	    NOT NULL,
createdAt               TIMESTAMP           DEFAULT CURRENT_TIMESTAMP,
updatedAt               TIMESTAMP 		    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt               TIMESTAMP 		    NULL,
FOREIGN KEY (idPost) REFERENCES posteosUsuario(id),
FOREIGN KEY (idUsuario)REFERENCES usuario(id));


insert into usuario(id, contrasena, email, nombre, foto_de_perfil, fecha_nacimiento, dni, createdAt, updatedAt, deletedAt)Values
	(DEFAULT, 'contrasena1', 'pablo@gmail.com', 'Pablo', '/img/pablo.jpg', '1865-12-15', '44986213', DEFAULT, DEFAULT, DEFAULT),
	(DEFAULT, 'contrasena2', 'maria@gmail.com', 'Maria', '/img/maria.jpg', '2002-09-20', '42871032', DEFAULT, DEFAULT, DEFAULT),
	(DEFAULT, 'contrasena3', 'martin@gmail.com', 'Martin', '/img/martin.jpg', '1924-07-16', '78951468', DEFAULT, DEFAULT, DEFAULT),
	(DEFAULT, 'contrasena4', 'paula@gmail.com', 'Paula', '/img/paula.jpg', '1970-10-28', '45236987', DEFAULT, DEFAULT, DEFAULT),
	(DEFAULT, 'contrasena5', 'franco@gmail.com', 'Franco', '/img/franco.jpg', '2003-03-03', '46257465', DEFAULT, DEFAULT, DEFAULT),
	(DEFAULT, 'contrasena6', 'lola@gmail.com', 'Lola', '/img/lola.jpg', '1999-12-30', '40458965', DEFAULT, DEFAULT, DEFAULT),
	(DEFAULT, 'contrasena7', 'tomas@gmail.com', 'Tomas', '/img/tomas.jpg', '2005-10-19', '48987201', DEFAULT, DEFAULT, DEFAULT),
	(DEFAULT, 'contrasena8', 'magui@gmail.com', 'Magui', '/img/magui.jpg', '1975-12-20', '22659874', DEFAULT, DEFAULT, DEFAULT),
	(DEFAULT, 'contrasena9', 'raul@gmail.com', 'Raul', '/img/raul.jpg', '2001-11-08', '43598712', DEFAULT, DEFAULT, DEFAULT),
	(DEFAULT, 'contrasena10', 'emma@gmail.com', 'Emma', '/img/emma.jpg', '1980-08-18', '38965417', DEFAULT, DEFAULT, DEFAULT);


insert into posteosUsuario(id, clienteId, nombreUsuario, fotoPerfil, nombreImg, textonombre, textoposteo, createdAt, updatedAt, deletedAt) values
(1, 1, 'Pablo', '/img/pablo.jpg', "https://cdn.motor1.com/images/mgl/Akkwn2/s1/lanzamiento-mercedes-benz-clasec-1.jpg", "mercedez benz", "color negro", DEFAULT, DEFAULT, NULL),
(2, 2, 'Maria', '/img/maria.jpg', 'https://media.autoexpress.co.uk/image/private/s--5-xtWGFv--/f_auto,t_content-image-full-desktop@1/v1636372558/autoexpress/2021/11/Ferrari%20812%20Competizione%202021-2.jpg', 'Lago di Como', 'te paso a buscar en la amarilla?bbeta', DEFAULT, DEFAULT, NULL),
(3, 7, 'Tomas', '/img/tomas.jpg', 'https://www.km77.com/media/fotos/volkswagen_golf_2009_gti_3141_1.jpg', 'Messi', 'Golf gti', DEFAULT, DEFAULT, NULL),
(4, 3, 'Martin', '/img/martin.jpg', 'https://cdn.motor1.com/images/mgl/VRW87/s1/primicia-confirmada-vw-presento-la-amarok-v6.webp', 'Asado', 'Amarok', DEFAULT, DEFAULT, NULL),
(5, 6, 'Lola', '/img/lola.jpg', 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/10/bmw-m2-coupe-2023-2839887.jpg?tf=2048x', 'Pareja', 'Mi pareja', DEFAULT, DEFAULT, NULL),
(6, 10, 'Emma', '/img/emma.jpg', 'https://cdn.motor1.com/images/mgl/2NO9Xp/s1/lamborghini-urus-by-mansory-and-mtm.webp', 'lamborghini', 'Que buena pelicula', DEFAULT, DEFAULT, NULL),
(7, 8, 'Magui', '/img/magui.jpg', 'https://www.digitaltrends.com/wp-content/uploads/2019/01/lamborghini_huracan_evo_street_2.jpg?resize=625%2C417&p=1', 'Receta', 'Miren esta receta', DEFAULT, DEFAULT, NULL),
(8, 5, 'Franco', '/img/franco.jpg', 'https://images.dealer.com/autodata/us/640/color/2023/USD30MBS231A0/040.jpg', 'mercho', 'Mejor tenista del mundo', DEFAULT, DEFAULT, NULL),
(9, 9, 'Raul', '/img/raul.jpg', 'https://autodinamico.mx/wp-content/uploads/2022/04/AMG-AD1-1920x1080.jpg', 'MassaMilei', 'Quien gana?', DEFAULT, DEFAULT, NULL),
(10, 4, 'Paula', '/img/paula.jpg', 'https://gagadget.com/media/cache/df/34/df34d87e1d252e5c9d5a3694ceb0de68.jpg', 'Paretto', 'Foto mia paula paretto', DEFAULT, DEFAULT, NULL);





insert into tablaDeComentario (id, idPost, idUsuario, campoTextoNombreImg, nombreUsuarioComentario, createdAt, updatedAt, deletedAt)values
(1, 1, 2, 'Muy Bueno', 'Maria', default, default, default),
(2, 1, 3, 'No me gusto', 'Martin',default, default, default),
(3, 1, 4, 'Esplendido', 'Paula', default, default, default),
(4, 1, 5, 'Buenisimo', 'Franco', default, default, default),
(5, 2, 10, 'Que lindo lugar', 'Emma', default, default, default),
(6, 2, 9, 'Italia', 'Raul', default, default, default),
(7, 2, 8, 'Europa es god', 'Magui', default, default, default),
(8, 2, 7, 'Llevame', 'Tomas', default, default, default),
(9, 3, 6, 'Aguante messiii', 'Lola', default, default, default),
(10, 3, 5, 'vamoosss', 'Franco', default, default, default),
(11, 3, 8, 'goat', 'Magui', default, default, default),
(12, 3, 4, 'indiscutido', 'Paula', default, default, default),
(13, 4, 1, 'que rico', 'Pablo', default, default, default),
(14, 4, 9, 'prefiero el vacio', 'Raul', default, default, default),
(15, 4, 7, 'Invitame mal amigo', 'Tomas', default, default, default),
(16, 4, 10, 'el mejor corte lejos', 'Emma', default, default, default),
(17, 5, 1,'les mando un abrazo', 'Pablo', default, default, default),
(18, 5, 4,'a mi me dejaron', 'Paula', default, default, default),
(19, 5, 5,'Paula yo te propongo matrimonio no hay drama', 'Franco', default, default, default),
(20, 5, 2,'que tiernos', 'Maria', default, default, default),
(21, 6, 2,'no la entiendo', 'Maria', default, default, default),
(22, 6, 9,'Nolan crack', 'Raul', default, default, default),
(23, 6, 3,'Tarantino es mejor', 'Martin', default, default, default),
(24, 6, 7,'aburrida', 'Tomas', default, default, default),
(25, 7, 5,'Prefiero el pesto', 'Franco', default, default, default),
(26, 7, 3,'Cuando me cocinas?', 'Martin', default, default, default),
(27, 7, 2,'Bolognesaaa', 'Maria', default, default, default),
(28, 7, 6,'fideo con salsa', 'Lola', default, default, default),
(29, 8, 1,'Asi es', 'Pablo', default, default, default),
(30, 8, 7,'Sin dudas', 'Tomas', default, default, default),
(31, 8, 2,'Epico', 'Maria', default, default, default),
(32, 8, 6,'Nadal es mejor', 'Lola', default, default, default),
(33, 9, 1,'Massa', 'Pablo', default, default, default),
(34, 9, 7,'Milei', 'Tomas', default, default, default),
(35, 9, 3,'Todos', 'Martin', default, default, default),
(36, 9, 6,'Ninguno', 'Lola', default, default, default),
(37, 10, 1,'Que grande Paula!', 'Pablo', default, default, default),
(38, 10, 7,'Felicitaciones!', 'Tomas', default, default, default),
(39, 10, 3,'Sos crack!', 'Martin', default, default, default),
(40, 10, 6,'Bien ahi!', 'Lola', default, default, default);