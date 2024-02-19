CREATE SCHEMA IF NOT EXISTS xct;
 
CREATE TABLE IF NOT EXISTS xct.users
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS xct.wishlists 
(
    wishlist_id SERIAL PRIMARY KEY,
    crated_by INT REFERENCES xct.users(user_id) ON DELETE CASCADE,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    is_delete BOOLEAN DEFAULT false
);

ALTER TABLE xct.wishlists
ADD COLUMN user_id INT  REFERENCES xct.users(user_id);
