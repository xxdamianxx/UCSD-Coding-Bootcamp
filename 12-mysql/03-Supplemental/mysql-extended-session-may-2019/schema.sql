DROP DATABASE IF EXISTS heroDB;
CREATE DATABASE heroDB;
USE heroDB;

DROP TABLE heroes;

CREATE TABLE heroes (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    power VARCHAR(255) NOT NULL,
    strength INTEGER(11) NOT NULL,
    PRIMARY KEY(id)
)

SELECT * FROM heroes;

INSERT INTO heroes(name, power, strength) VALUES ("Superman", "Super Strong", 999);
INSERT INTO heroes(name, power, strength) VALUES ("Wolverwine", "Adamantium Claws", 300);
INSERT INTO heroes SET name = "Captain Marvel", power = "Laser Beams", strength = 800;

-- UPDATE heroes SET strength = 999 WHERE id = 1;
-- DELETE FROM heroes WHERE id = 2;