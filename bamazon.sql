CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(5) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Flowers', 'Agriculture',4.50,100),
 ('Bushes', 'Agriculture',150,45),
 ('Succulents', 'Agriculture',3.25,250),
 ('Soil', 'Agriculture',6.25,35),
 ('Shovel', 'Tools',7.50,50),
 ('Water Can', 'Tools',12.50,20),
 ('Pots', 'Containers',15,80),
 ('Vases', 'Containers',25,15),
 ('Fertilizer', 'Agriculture',9,42),
 ('Wheel Barrel', 'Tools',125,5)
;

SELECT * FROM products;