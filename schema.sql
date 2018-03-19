DROP DATABASE IF EXISTS `bbam_db`;
CREATE DATABASE `bbam_db`;


SELECT * FROM EscapePosts;
SELECT * FROM Users;


INSERT INTO Users (userName, passWord)
VALUES ("bm991815", "password");

INSERT INTO Users (userName, passWord)
VALUES ("carol", "anotherpass");

INSERT INTO EscapePosts (title, journal_entry, share, UserId)
VALUES ("Brandon", "My first post", True, 1);

INSERT INTO EscapePosts (title, journal_entry, share, UserId)
VALUES ("Carolyn", "My second post", True, 1);


INSERT INTO Users (userName, passWord)
VALUES ("user1234", "anotherpass");

INSERT INTO EscapePosts (title, journal_entry, share, UserId)
VALUES ("Mystuff", "My third post", True, 1);

INSERT INTO Users (userName, passWord)
VALUES ("user12345678", "anotherpass");

INSERT INTO EscapePosts (title, journal_entry, share, UserId)
VALUES ("Mys", "My fourth post", True, 1);


INSERT INTO Users (userName, passWord)
VALUES ("user0987", "anotherpass");

INSERT INTO EscapePosts (title, journal_entry, share, UserId)
VALUES ("today was great", "My fifth post", True, 1);
