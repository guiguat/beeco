CREATE TABLE [IF NOT EXISTS] user_info(
	user_id varchar NOT NULL,
	first_name varchar(20) NOT NULL,
    last_name varchar(40) NOT NULL,
    description varchar(140) NOT NULL,
	email varchar NOT NULL,
	photo varchar NOT NULL,
	cellphone varchar(20) NOT NULL UNIQUE,
	phone varchar(20) UNIQUE
	rating_sum int CONSTRAINT non_negative_rating_sum CHECK (rating_sum >= 0) NOT NULL,
	rating_count int CONSTRAINT non_negative_rating_count CHECK (rating_count >= 0) NOT NULL,
	PRIMARY KEY(user_id)
);

CREATE TABLE [IF NOT EXISTS] task(
	task_id varchar NOT NULL,
	title varchar(40) NOT NULL,
	description varchar(240) NOT NULL,
	min_price decimal NOT NULL,
	max_price decimal NOT NULL,
	location varchar(23),
    tags varchar NOT NULL,
	status int NOT NULL,
	freelancer_id varchar references user_info(user_id),
	owner_id varchar NOT NULL references user_info(user_id),
    created_at TIMESTAMP NOT NULL,
	PRIMARY KEY(service_id)
);