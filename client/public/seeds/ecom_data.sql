-- myworkbench sql database
-- Database that will connect to server.js 

-- DROP DATABASE ecommerce;
-- CREATE DATABASE ecommerce;


-- USE ecommerce; 

-- Made description to 400 VARCHAR instead of 255 becasue the description is long
-- CREATE TABLE products (
--   id int NOT NULL AUTO_INCREMENT,
--   name varchar(100) DEFAULT NULL,
--   description varchar(400) DEFAULT NULL,
--   price decimal(5,2) DEFAULT NULL,
--   pics varchar(255) DEFAULT NULL,
--   type varchar(100) DEFAULT NULL,
--   PRIMARY KEY (id)



--  INSERT INTO products (name, description, price, type) VALUES 
-- ("Athletic Graphic T-shirt (Women's)", "Women's t-shirt that easily combines comfort and style while the design will make it into a unique statement piece", 40.00, "t-shirt" ),
-- ("Athletic Graphic T-shirt (Men's)", "Men's t-shirt that easily combines comfort and style while the design will make it into a unique statement piece", 40.00, "t-shirt" ),
-- ("Black Rash Guard", "This smooth and versatile long-sleeve rash guard will protect you while you have fun doing sports. It is slim-fitted with flat ergonomic seams, and a bit longer than your casual tee for extra comfort and protection", 45.00, "other" ),
-- ("Graphic iPhone Case", "This sleek iPhone case protects your phone from scratches, dust, oil, and dirt. It has a solid back and flexible sides that make it easy to take on and off, with precisely aligned port openings", 15.00, "other" ),
--  ("Graphic Samsung Case", "This sleek Samsung case protects your phone from scratches, dust, oil, and dirt. It has a solid back and flexible sides that make it easy to take on and off, with precisely aligned cuts and holes", 15.00, "other" ),
-- ("Graphic Drawstring Bag", "Combine your love for vibrant prints and a sporty style with a cool drawstring bag. It's a must-have gym essential that can be worn as a backpack with drawstring closure at top, and narrow, contrasting shoulder straps", 25.00, "other" ),
-- ("Graphic Pillow", "Want to add a splash of color to your home? This premium feel pillow with a shape-retaining insert is just what you're looking for! It'll make any room luxurious and provide the perfect excuse for a quick power nap", 30.00, "other" ),
--  ("Graphic Face Mask", "This reusable face mask will fit you nicely thanks to it's adjustable nose wire and elastic bands. Choose a design that will complement your style", 10.00 ),
-- ("Graphic Laptop Sleeve", "Protect your laptop in style—get this snug, lightweight laptop sleeve! To prevent any scratch marks, it contains an internal padded zipper and its interior is fully lined with faux fur", 25.00, "other" ),
-- ("Graphic Beanie", "This beanie will keep you warm on chilly days and serve as a stylish addition to your outfit. It’s double-layered, soft, and comfy!", 20.00, "other" ),
-- ("Graphic Duffle Bag", "This duffle bag is the perfect companion for every occasion—take it with you when traveling, running daily errands, or going to the gym. The bag is spacious and will keep all your stuff neat and organized with its multiple pockets, including one with a zipper for your most valuable possessions.", 80.00, "other" ),
-- ("Graphic Tank Top", "This tank top has everything you could possibly need – vibrant colors, soft material, and a relaxed fit that will make you look fabulous!", 30.00, "t-shirt" );




-- Heroku database setup with CLEAR DB MYSQL
-- USE heroku_929a4dfecfd60c3; 



-- CREATE TABLE products (
-- id INT PRIMARY KEY AUTO_INCREMENT, 
-- name VARCHAR(100), 
-- description VARCHAR(400), 
-- price DECIMAL(5,2), 
-- pics VARCHAR(255), 
-- type VARCHAR(100)
-- );


-- INSERT INTO products (name, description, price, pics, type) VALUES 
-- ("Athletic Graphic T-shirt (Women's)","Women's t-shirt that easily combines comfort and style while the design will make it into a unique statement piece", 40.00, "images/product-one.webp", "t-shirt"), 
-- ("Athletic Graphic T-shirt (Men's)","Men's t-shirt that easily combines comfort and style while the design will make it into a unique statement piece", 40.00, "images/product-two.webp", "t-shirt" ),
-- ("Black Rash Guard","This smooth and versatile long-sleeve rash guard will protect you while you have fun doing sports. It is slim-fitted with flat ergonomic seams, and a bit longer than your casual tee for extra comfort and protection", 45.00, "images/product-three.webp", "other" ),
-- ("Graphic iPhone Case","This sleek iPhone case protects your phone from scratches, dust, oil, and dirt. It has a solid back and flexible sides that make it easy to take on and off, with precisely aligned port openings", 15.00, "images/product-four.webp", "other" ),
-- ("Graphic Samsung Case", "This sleek Samsung case protects your phone from scratches, dust, oil, and dirt. It has a solid back and flexible sides that make it easy to take on and off, with precisely aligned cuts and holes", 15.00, "images/product-five.webp", "other" ),
-- ("Graphic Drawstring Bag ", "Combine your love for vibrant prints and a sporty style with a cool drawstring bag. It's a must-have gym essential that can be worn as a backpack with drawstring closure at top, and narrow, contrasting shoulder straps", 25.00, "images/product-six.webp", "other" ),
-- ("Graphic Pillow", "Want to add a splash of color to your home? This premium feel pillow with a shape-retaining insert is just what you're looking for! It'll make any room luxurious and provide the perfect excuse for a quick power nap", 30.00, "images/product-seven.webp", "other" ),
-- ("Graphic Face Mask", "This reusable face mask will fit you nicely thanks to it's adjustable nose wire and elastic bands. Choose a design that will complement your style", 10.00, "images/product-eight.webp", "other" ),
-- ("Graphic Laptop Sleeve", "Protect your laptop in style—get this snug, lightweight laptop sleeve! To prevent any scratch marks, it contains an internal padded zipper and its interior is fully lined with faux fur", 25.00, "images/product-nine.webp", "other" ),
-- ("Graphic Beanie", "This beanie will keep you warm on chilly days and serve as a stylish addition to your outfit. It’s double-layered, soft, and comfy!", 20.00, "images/product-ten.webp", "other" ),
-- ("Graphic Duffle Bag", "This duffle bag is the perfect companion for every occasion—take it with you when traveling, running daily errands, or going to the gym. The bag is spacious and will keep all your stuff neat and organized with its multiple pockets, including one with a zipper for your most valuable possessions.", 80.00, "images/product-eleven.webp", "other" ),
-- ("Graphic Tank Top", "This tank top has everything you could possibly need – vibrant colors, soft material, and a relaxed fit that will make you look fabulous!", 30.00, "images/product-twelve.webp", "t-shirt" )