CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username text (20),
  PRIMARY KEY (id)
);
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomname text (15),
  PRIMARY KEY (id)
);
CREATE TABLE friends (
  id INT NOT NULL AUTO_INCREMENT,
  follower INT,
  FOLLOWED INT,
  FOREIGN KEY (follower) REFERENCES users(id),
  FOREIGN KEY (followed) REFERENCES users(id),
  PRIMARY KEY (id)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  message text (255),
  user_id int,
  room_id int,
  date_time DATETIME,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  PRIMARY KEY (id)
);




/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

