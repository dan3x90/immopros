BEGIN;
DROP TABLE IF EXISTS discussion CASCADE;
DROP TABLE IF EXISTS message;
CREATE TABLE discussion (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    collaborator_1 INTEGER NOT NULL ,
    collaborator_2 INTEGER NOT NULL,
    name TEXT
);


CREATE TABLE message (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    content TEXT NOT NULL,
    sent_date TIMESTAMP DEFAULT NOW(),
    sender_id INTEGER NOT NULL ,
    receiver_id INTEGER  NOT NULL,
    discussion_id INTEGER REFERENCES discussion(id) 
)
COMMIT;