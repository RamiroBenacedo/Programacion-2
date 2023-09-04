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
