CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
	position  INT NOT NULL,
    artist VARCHAR(255) NULL,
    song VARCHAR(255) NULL,
    year INTEGER(4) NULL,
    raw_total DECIMAL(10, 4) NULL,
    raw_usa DECIMAL(10, 4) NULL,
    raw_uk DECIMAL(10, 4) NULL,
    raw_eur DECIMAL(10, 4) NULL,
    -- row stands for rest of world
    raw_row DECIMAL(10, 4) NULL,
    PRIMARY KEY (position)
);

SELECT * FROM top5000;

  -- A query which returns all data for songs sung by a specific artist
  SELECT * FROM top5000 WHERE artist = "The Beatles";
  -- A query which returns all artists who appear within the top 5000 more than once
  SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1;
  -- A query which returns all data contained within a specific range
  SELECT * FROM top5000 WHERE position BETWEEN 1 AND 10;
  -- A query which searches for a specific song in the top 5000 and returns the data for it
  SELECT * FROM top5000 WHERE song = "Umbrella";
  
  CREATE TABLE top_albums (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM top_albums;