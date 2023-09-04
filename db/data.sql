CREATE DATABASE IF NOT EXISTS usuarios;

USE usuarios;

CREATE TABLE usuario (

/* nombreDeColumna  tipoDeDato  restricciones */
id_usuario       INT         UNSIGNED PRIMARY KEY AUTO_INCREMENT,
pass             VARCHAR(50) NOT NULL,
email            VARCHAR(50) NOT NULL,
fecha            INT         NOT NULL,
profilePic       VARCHAR(50) NOT NULL,
dni              INT         NOT NULL,
createdAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt                    TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
