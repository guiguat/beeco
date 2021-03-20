CREATE TABLE [IF EXISTS] user(
	user_id UUID PRIMARY KEY,
	name varchar(40) NOT NULL,
	email varchar(20) NOT NULL,
	password char(60) NOT NULL UNIQUE,
	prophile_picture varchar(100) NOT NULL,
	cellphone varchar(15) NOT NULL UNIQUE,
	phone varchar(15) UNIQUE
	rating_sum int CONSTRAINT non_negative_rating_sum CHECK (rating_sum >= 0) NOT NULL,
	rating_count int CONSTRAINT non_negative_rating_count CHECK (rating_count >= 0) NOT NULL
);

CREATE TABLE [IF EXISTS] task(
	service_id UUID,
	name varchar(40) NOT NULL,
	description varchar(240) NOT NULL,
	min_price double CONSTRAINT non_negative_min_price CHECK (min_price >= 0) NOT NULL,
	max_price double CONSTRAINT non_negative_max_price CHECK (max_price >= 0) NOT NULL,
	location varchar(23),
	status int NOT NULL,
	freelancer_id UUID,
	owner_id UUID REFERENCES user ON DELETE CASCADE,
	CONSTRAINT invalid_min_max_price CHECK( max_price > min_price),
	
);
