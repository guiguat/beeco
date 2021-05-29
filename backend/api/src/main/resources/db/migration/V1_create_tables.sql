CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE user_info;
DROP TABLE task;
CREATE TABLE [IF NOT EXISTS] user_info(
	user_id varchar,
	first_name varchar(20) NOT NULL,
    last_name varchar(40) NOT NULL,
	email varchar NOT NULL,
	photo varchar NOT NULL,
	cellphone varchar(20) NOT NULL UNIQUE,
	phone varchar(20) UNIQUE
	rating_sum int CONSTRAINT non_negative_rating_sum CHECK (rating_sum >= 0) NOT NULL,
	rating_count int CONSTRAINT non_negative_rating_count CHECK (rating_count >= 0) NOT NULL,
	PRIMARY KEY(user_id)
);

CREATE TABLE [IF NOT EXISTS] task(
	service_id uuid DEFAULT uuid_generate_v4 (),
	name varchar(40) NOT NULL,
	description varchar(500) NOT NULL,
	min_price decimal CONSTRAINT non_negative_min_price CHECK (min_price >= 0) NOT NULL,
	max_price decimal CONSTRAINT non_negative_max_price CHECK (max_price >= 0) NOT NULL,
	location varchar(23),
	status int NOT NULL,
	freelancer_id varchar,
	owner_id varchar REFERENCES user ON DELETE CASCADE,
	CONSTRAINT invalid_min_max_price CHECK( max_price > min_price),
	PRIMARY KEY(service_id)
);