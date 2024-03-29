USE tech_blog_db;

INSERT INTO users (username, email, password) VALUES
('johndoe', 'john@example.com', 'hashed_password'),
('janedoe', 'jane@example.com', 'hashed_password');

INSERT INTO posts (title, content, user_id) VALUES
('My First Post', 'This is the content of my first post.', 1),
('Another Post', 'This is some more content.', 2);
