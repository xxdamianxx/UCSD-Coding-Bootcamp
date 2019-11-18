SELECT * FROM country;

SELECT * FROM city;

SELECT * FROM countrylanguage;

-- SELECT all the cities where the country code is "USA" from country and city
SELECT country.Code, country.Name, city.Name 
FROM country 
INNER JOIN city ON country.Code = city.CountryCode 
WHERE country.Code = "USA";

-- WRITE an INNER JOIN where you get all cities with the country code of "MEX"