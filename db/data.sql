CREATE DATABASE  IF NOT EXISTS usuarios;

USE usuarios;

CREATE TABLE usuario (
	/* nombreDeColumna  tipoDeDato  restricciones */
	id       INT         UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	contrasena          VARCHAR(50) NOT NULL,
	email            VARCHAR(50) NOT NULL,
    nombre              VARCHAR(250) NOT NULL,
	foto_de_perfil       VARCHAR(50) NOT NULL,
	fecha_nacimiento             INT         NOT NULL,
	dni                  int(11) NOT NULL,
	createdAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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
FOREIGN KEY (clienteId) REFERENCES usuario (idUsuario)
);


CREATE TABLE tabladecomentario (
/* nombreDeColumna  tipoDeDato  restricciones */
id       		        INT         	    UNSIGNED PRIMARY KEY AUTO_INCREMENT,
Idpost				    INT                 UNSIGNED,
idusuario               INT                 UNSIGNED,
campoTextoNombreImg		VARCHAR(200)	    NOT NULL,
createdAt               TIMESTAMP           DEFAULT CURRENT_TIMESTAMP,
updatedAt               TIMESTAMP 		    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt               TIMESTAMP 		    NULL,
FOREIGN KEY (idpost) REFERENCES posteos(id),
FOREIGN KEY (idusuario)REFERENCES usuario(id));


insert into usuario(id, contrasena, email, nombre, foto_de_perfil, fecha_nacimiento, dni,createdAt,updatedAt,deledAt)Values
	(1, 'contrasena1', 'pablo@gmail.com', 'Pablo', '/img/pablo.jpg', '1865-12-15', '44986213'),
	(2, 'contrasena2', 'maria@gmail.com', 'Maria', '', '2002-09-20', '42871032'),
	(3, 'contrasena3', 'martin@gmail.com', 'Martin', '../public/img/martin.jpg', '1924-07-16', '78951468'),
	(4, 'contrasena4', 'paula@gmail.com', 'Paula', '../public/img/paula.jpg', '1970-10-28', '45236987'),
	(5, 'contrasena5', 'franco@gmail.com', 'Franco', '../public/img/franco.jpg', '2003-03-03', '46257465'),
	(6, 'contrasena6', 'lola@gmail.com', 'Lola', '../public/img/lola.jpg', '1999-12-30', '40458965'),
	(7, 'contrasena7', 'tomas@gmail.com', 'Tomas', '../public/img/tomas.jpg', '2005-10-19', '48987201'),
	(8, 'contrasena8', 'magui@gmail.com', 'Magui', '../public/img/magui.jpg', '1975-12-20', '22659874'),
	(9, 'contrasena9', 'raul@gmail.com', 'Raul', '../public/img/raul.jpg', '2001-11-08', '43598712'),
	(10, 'contrasena10', 'emma@gmail.com', 'Emma', '../public/img/emma.jpg', '1980-08-18', '38965417');


insert into posteosUsuario(id, clienteId, nombreUsuario, fotoPerfil, nombreImg, textonombre, textoposteo, createdAt, updatedAt, deledAt) values
(1, 1, 'Pablo', '/img/pablo.jpg', "https://cdn.motor1.com/images/mgl/Akkwn2/s1/lanzamiento-mercedes-benz-clasec-1.jpg", "mercedez benz", "color negro", DEFAULT, DEFAULT, NULL),
(2, 2, 'Maria', '/img/maria.jpg', 'https://media.autoexpress.co.uk/image/private/s--5-xtWGFv--/f_auto,t_content-image-full-desktop@1/v1636372558/autoexpress/2021/11/Ferrari%20812%20Competizione%202021-2.jpg', 'Lago di Como', 'te paso a buscar en la amarilla?bbeta', DEFAULT, DEFAULT, NULL),
(3, 7, 'Tomas', '/img/tomas.jpg', 'https://www.km77.com/media/fotos/volkswagen_golf_2009_gti_3141_1.jpg', 'Messi', 'Golf gti', DEFAULT, DEFAULT, NULL),
(4, 3, 'Martin', '/img/martin.jpg', 'https://cdn.motor1.com/images/mgl/VRW87/s1/primicia-confirmada-vw-presento-la-amarok-v6.webp', 'Asado', 'Amarok', DEFAULT, DEFAULT, NULL),
(5, 6, 'Lola', '/img/lola.jpg', 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/10/bmw-m2-coupe-2023-2839887.jpg?tf=2048x', 'Pareja', 'Mi pareja', DEFAULT, DEFAULT, NULL),
(6, 10, 'Emma', '/img/emma.jpg', 'https://cdn.motor1.com/images/mgl/2NO9Xp/s1/lamborghini-urus-by-mansory-and-mtm.webp', 'lamborghini', 'Que buena pelicula', DEFAULT, DEFAULT, NULL),
(7, 8, 'Magui', '/img/magui.jpg', 'https://www.digitaltrends.com/wp-content/uploads/2019/01/lamborghini_huracan_evo_street_2.jpg?resize=625%2C417&p=1', 'Receta', 'Miren esta receta', DEFAULT, DEFAULT, NULL),
(8, 5, 'Franco', '/img/franco.jpg', 'https://images.dealer.com/autodata/us/640/color/2023/USD30MBS231A0/040.jpg', 'mercho', 'Mejor tenista del mundo', DEFAULT, DEFAULT, NULL),
(9, 9, 'Raul', '/img/raul.jpg', 'https://autodinamico.mx/wp-content/uploads/2022/04/AMG-AD1-1920x1080.jpg', 'MassaMilei', 'Quien gana?', DEFAULT, DEFAULT, NULL),
(10, 4, 'Paula', '/img/paula.jpg', 'https://gagadget.com/media/cache/df/34/df34d87e1d252e5c9d5a3694ceb0de68.jpg', 'Paretto', 'Foto mia paula paretto', DEFAULT, DEFAULT, NULL)





insert into tablaDeComentario (id, idPost, idUsuario, campoTextoNombreImg , createdAt, updatedAt, deletedAt)values
(1, 1, 2, 'Muy Bueno', default, default, default),
(2, 1, 3, 'No me gusto', default, default, default),
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


