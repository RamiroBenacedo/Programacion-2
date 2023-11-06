CREATE DATABASE  IF NOT EXISTS usuarios;

USE usuarios;

CREATE TABLE usuario (

/* nombreDeColumna  tipoDeDato  restricciones */
idUsuario       INT         UNSIGNED PRIMARY KEY AUTO_INCREMENT,
pass             VARCHAR(50) NOT NULL,
email            VARCHAR(50) NOT NULL,
fecha            INT         NOT NULL,
profilePic       VARCHAR(50) NOT NULL,
dni              INT         NOT NULL,
createdAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP );

CREATE TABLE posteosUsuario (
/* nombreDeColumna  tipoDeDato  restricciones */
idUsuario       		INT         	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
clienteId				INT UNSIGNED,
campoTextoNombreImg		VARCHAR(200)	NOT NULL,
campoTextoPiePost		VARCHAR(200)	NOT NULL,
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
clavesforranea          TIMESTAMP           DEFAULT current_timestamp,
updatedAt               TIMESTAMP 		    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt               TIMESTAMP 		    NULL,
FOREIGN KEY (idpost) REFERENCES posteos(id),
FOREIGN KEY (idusuario)REFERENCES usuario(id));

insert into usuario(idusuario,pass,email,fecha,profilePic,dni,createdAt,updatedAt,deledAt)Values
(1,'pablo@gmail.com','pablo','Pablo','/img/pablo.jpg','15/12/1865','44986213'),
(2,'maria@gmail.com','maria','Maria','Maria','20/09/2002','42871032'),
(3,'martin@gmail.com','martin','Martin','../public/img/martin.jpg','16/07/1924','78951468'),
(4,'paula@gmail.com','paula','Paula','../public/img/paula.jpg','28/10/1970','45236987'),
(5,'franco@gmail.com','franco','Franco','../public/img/franco.jpg','03/03/2003','46257465'),
(6,'lola@gmail.com','lola','../public/img/lola.jpg','30/12/1999','40458965'),
(7,'tomas@gmail.com','tomas','../public/img/tomas.jpg','19/10/2005','48987201'),
(8,'magui@gmail.com','magui','../public/img/magui.jpg','20/12/1975','22659874'),
(9,'raul@gmail.com','raul@gmail.com','raul','Raul','../public/img/raul.jpg','08/11/2001','43598712'),
(10,'emma@gmail.com','emma','Emma','../public/img/emma.jpg','18/08/1980','38965417');




insert into tablaDeComentario (id, idPost, idUsuario, campoTextoNombreImg , clavesforranea, updatedAt, deletedAt)values
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
