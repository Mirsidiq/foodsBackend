CREATE DATABASE foods;
\c foods
create extension pgcrypt;
CREATE TABLE navigation(
    navigation_id serial primary key,
    navigation_title varchar(64) not null
);
CREATE TABLE users(
    user_id serial primary key,
    username varchar(64) not null,
    password varchar(64) not null
);
CREATE TABLE categories(
    category_id serial primary key,
    category_title varchar(64) not null
);
CREATE TABLE foods(
    food_id serial primary key,
    food_title varchar(64) not null,
    food_description text not null,
    food_price decimal(10,2) not null,
    food_stars smallint not null,
    food_thumbnail text not null,
    category_id int references categories(category_id)
);
CREATE TABLE news(
    news_id serial primary key,
    news_title varchar(64) not null,
    news_description text not null,
    thumbnail text not null
);
insert into admins(username,password) values('mirsidiq',crypt('123456789',gen_salt('bf'))); 
INSERT INTO navigation(navigation_title)VALUES('about us');
INSERT INTO categories(category_title)VALUES('dessert'),('fast foods');
INSERT INTO foods(food_title,food_description,food_price,food_stars,category_id,food_thumbnail) VALUES('lavash','lavash with cheese',28000,5,2,'asdfghgfds');
INSERT INTO foods(food_title,food_description,food_price,food_stars,category_id,food_thumbnail) VALUES('ice cream','ice cream with chocolate',14000,5,1,'adsfgdhjfgkjhgf');
INSERT INTO foods(food_title,food_description,food_price,food_stars,category_id,food_thumbnail) VALUES('cheese burger','cheese burger with double cheese',32000,5,2,'dfsgjhghjfhdgfssad');
----------------------------------------see later------------------------------------------------>
CREATE TABLE clients(
    client_id serial primary key,
    client_name varchar(64) not null,
);
CREATE TABLE messages(
    message_id serial primary key,
    message_author int clients(client_id),
    message_decription text not null,
    message_date date default 
    message_time timestamp default current_timestamp
);