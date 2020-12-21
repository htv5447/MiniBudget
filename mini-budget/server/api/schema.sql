DROP table if EXISTS budget CASCADE;


CREATE TABLE budget (
    id SERIAL PRIMARY KEY NOT NULL,
    items VARCHAR(100),
    price INT NOT NULL
);