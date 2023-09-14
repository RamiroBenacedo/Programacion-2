CREATE DATABASE IF NOT EXISTS usuarios;

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
insert into 'usuaio'('idusuaio','pass','email','fecha','profilePic','dni','createdAt','updatedAt','deledAt')Values
(1,'pablo@gmail.com','pablo','Pablo','/img/pablo.jpg','15/12/1865','44986213')
(2,'maria@gmail.com','maria','Maria','Maria','20/09/2002','42871032')
(3,'martin@gmail.com','martin','Martin','../public/img/martin.jpg','16/07/1924','78951468')
(4,'paula@gmail.com','paula','Paula','../public/img/paula.jpg','28/10/1970','45236987')
(5,'franco@gmail.com','franco','Franco','../public/img/franco.jpg','03/03/2003','46257465')
(6,'lola@gmail.com','lola','../public/img/lola.jpg','30/12/1999','40458965')
(7,'tomas@gmail.com','tomas','../public/img/tomas.jpg','19/10/2005','48987201')
(8,'magui@gmail.com','magui','../public/img/magui.jpg','20/12/1975','22659874')
(9,'raul@gmail.com','raul@gmail.com','raul','Raul','../public/img/raul.jpg','08/11/2001','43598712')
(10,'emma@gmail.com','emma','Emma','../public/img/emma.jpg','18/08/1980','38965417')
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
