CREATE DATABASE Ecommerce;
USE Ecommerce;

CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY ,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE INDEX idx_users_email ON Users(email);

CREATE TABLE Products (
    id INT IDENTITY(1,1) PRIMARY KEY ,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL CHECK (price > 0)
);

CREATE INDEX idx_products_name ON Products(name);

CREATE TABLE Orders (
    id INT IDENTITY(1,1) PRIMARY KEY ,
    user_id INT,
    product_id INT,
    quantity INT NOT NULL CHECK (quantity > 0),
    total_price DECIMAL(10, 2) NOT NULL CHECK (total_price > 0),
    order_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

CREATE INDEX idx_orders_user_id ON Orders(user_id);
CREATE INDEX idx_orders_product_id ON Orders(product_id);
