CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  parent_id INT,
  FOREIGN KEY (parent_id) REFERENCES projects(id)
);
