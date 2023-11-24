CREATE DATABASE  IF NOT EXISTS usuarios;

USE usuarios;

CREATE TABLE usuario (
	/* nombreDeColumna  tipoDeDato  restricciones */
	id       INT         UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	contrasena          VARCHAR(500) NOT NULL,
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
nombreImg               VARCHAR(200)	NOT NULL,
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


insert into posteosUsuario(id, clienteId, nombreImg, textoposteo, createdAt, updatedAt, deletedAt) values
(1, 1, "https://cdn.motor1.com/images/mgl/Akkwn2/s1/lanzamiento-mercedes-benz-clasec-1.jpg", "color negro", DEFAULT, DEFAULT, NULL),
(2, 2, 'https://media.autoexpress.co.uk/image/private/s--5-xtWGFv--/f_auto,t_content-image-full-desktop@1/v1636372558/autoexpress/2021/11/Ferrari%20812%20Competizione%202021-2.jpg', 'te paso a buscar en la amarilla?bbeta', DEFAULT, DEFAULT, NULL),
(3, 7, 'https://www.km77.com/media/fotos/volkswagen_golf_2009_gti_3141_1.jpg', 'Golf gti', DEFAULT, DEFAULT, NULL),
(4, 3, 'https://cdn.motor1.com/images/mgl/VRW87/s1/primicia-confirmada-vw-presento-la-amarok-v6.webp', 'Amarok', DEFAULT, DEFAULT, NULL),
(5, 6, 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/10/bmw-m2-coupe-2023-2839887.jpg?tf=2048x', 'Mi pareja', DEFAULT, DEFAULT, NULL),
(6, 10, 'https://cdn.motor1.com/images/mgl/2NO9Xp/s1/lamborghini-urus-by-mansory-and-mtm.webp', 'Que buena pelicula', DEFAULT, DEFAULT, NULL),
(7, 8, 'https://www.digitaltrends.com/wp-content/uploads/2019/01/lamborghini_huracan_evo_street_2.jpg?resize=625%2C417&p=1', 'Miren esta receta', DEFAULT, DEFAULT, NULL),
(8, 5, 'https://images.dealer.com/autodata/us/640/color/2023/USD30MBS231A0/040.jpg', 'Mejor tenista del mundo', DEFAULT, DEFAULT, NULL),
(9, 9, 'https://autodinamico.mx/wp-content/uploads/2022/04/AMG-AD1-1920x1080.jpg', 'Quien gana?', DEFAULT, DEFAULT, NULL),
(10, 4, 'https://gagadget.com/media/cache/df/34/df34d87e1d252e5c9d5a3694ceb0de68.jpg', 'Foto mia paula paretto', DEFAULT, DEFAULT, NULL);





insert into tablaDeComentario (id, idPost, idUsuario, campoTextoNombreImg, createdAt, updatedAt, deletedAt)values
(1, 1, 2, 'Muy Bueno', default, default, default),
(2, 1, 3, 'No me gusto',default, default, default),
(3, 1, 4, 'Esplendido', default, default, default),
(4, 1, 5, 'Buenisimo', default, default, default),
(5, 2, 10, 'Que lindo lugar', default, default, default),
(6, 2, 9, 'Italia', default, default, default),
(7, 2, 8, 'Europa es god', default, default, default),
(8, 2, 7, 'Llevame', default, default, default),
(9, 3, 6, 'Aguante messiii', default, default, default),
(10, 3, 5, 'vamoosss', default, default, default),
(11, 3, 8, 'goat', default, default, default),
(12, 3, 4, 'indiscutido', default, default, default),
(13, 4, 1, 'que rico', default, default, default),
(14, 4, 9, 'prefiero el vacio', default, default, default),
(15, 4, 7, 'Invitame mal amigo', default, default, default),
(16, 4, 10, 'el mejor corte lejos', default, default, default),
(17, 5, 1,'les mando un abrazo', default, default, default),
(18, 5, 4,'a mi me dejaron', default, default, default),
(19, 5, 5,'Paula yo te propongo matrimonio no hay drama', default, default, default),
(20, 5, 2,'que tiernos', default, default, default),
(21, 6, 2,'no la entiendo', default, default, default),
(22, 6, 9,'Nolan crack', default, default, default),
(23, 6, 3,'Tarantino es mejor', default, default, default),
(24, 6, 7,'aburrida', default, default, default),
(25, 7, 5,'Prefiero el pesto', default, default, default),
(26, 7, 3,'Cuando me cocinas?', default, default, default),
(27, 7, 2,'Bolognesaaa', default, default, default),
(28, 7, 6,'fideo con salsa', default, default, default),
(29, 8, 1,'Asi es', default, default, default),
(30, 8, 7,'Sin dudas', default, default, default),
(31, 8, 2,'Epico', default, default, default),
(32, 8, 6,'Nadal es mejor', default, default, default),
(33, 9, 1,'Massa', default, default, default),
(34, 9, 7,'Milei', default, default, default),
(35, 9, 3,'Todos', default, default, default),
(36, 9, 6,'Ninguno', default, default, default),
(37, 10, 1,'Que grande Paula!', default, default, default),
(38, 10, 7,'Felicitaciones!', default, default, default),
(39, 10, 3,'Sos crack!', default, default, default),
(40, 10, 6,'Bien ahi!', default, default, default);