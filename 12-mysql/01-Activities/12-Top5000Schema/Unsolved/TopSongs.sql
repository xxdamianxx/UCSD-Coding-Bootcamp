DROP DATABASE IF EXISTS top_songs_db;
CREATE DATABASE top_songs_db;
USE top_songs_db;

CREATE TABLE top5000 (
	position INT NOT NULL,
    artist VARCHAR(255) NULL,
    song VARCHAR(255) NULL,
    year INTEGER(4) NULL,
    raw_total DECIMAL(10,4),
    raw_usa DECIMAL(10,4),
    raw_uk DECIMAL(10,4),
	raw_eur DECIMAL(10,4),
    -- row stands for rest of world --
    raw_row DECIMAL(10,4),
	PRIMARY KEY (position)
)

SELECT * FROM top5000;

-- A query which returns all data for songs sung by a specific artist --
SELECT * FROM top5000 WHERE artist = "the beatles";
-- A query which returns all artists who appear within the top 5000 more than once --
SELECT artist_name, COURT(artist_name) FROM top5000 GROUP BY artist_name HAVING COUNT(artist_name) > 1;
-- A query which returns all data contained within a specific range --
SELECT * FROM top5000 WHERE song_rank > 5 AND song_rank < 10;
-- A query which searches for a specific song in the top 5000 and returns the data for it --
SELECT * FROM top5000 WHERE song_title = "believe";